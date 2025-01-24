import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const todos = await prisma.todo.findMany({
      where: { userId: parseInt(userId) },
    });

    return NextResponse.json(todos);
  } catch (error) {
    console.log("Error fetching todos:", error);

    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { userId, content } = await req.json();

    if (!userId || !content) {
      return NextResponse.json(
        { error: "User ID and content are required" },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.create({
      data: { userId: parseInt(userId), content },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("Error creating todo:", error);

    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Todo ID is required" },
        { status: 400 }
      );
    }

    await prisma.todo.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Error deleting todo:", error);

    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const { id, content } = await req.json();

    if (!id || !content) {
      return NextResponse.json(
        { error: "Todo ID and content are required" },
        { status: 400 }
      );
    }

    const todo = await prisma.todo.update({
      where: { id: parseInt(id) },

      data: { content },
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.log("Error updating todo:", error);

    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}
