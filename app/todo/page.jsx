"use client";

import { useState, useEffect } from "react";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState("");

  const userId = 1; 

  useEffect(() => {
    fetch(`/api/todo?userId=${userId}`)
      .then((res) => res.json())

      .then((data) => setTodos(data));
  }, []);

  const addTodo = async () => {
    if (newTodo.trim()) {
      const res = await fetch("/api/todo", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({ userId, content: newTodo }),
      });

      const data = await res.json();

      setTodos([...todos, data]);

      setNewTodo("");
    }
  };

  const deleteTodo = async (id) => {
    await fetch("/api/todo", {
      method: "DELETE",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ id }),
    });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = async (id, content) => {
    const res = await fetch("/api/todo", {
      method: "PATCH",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ id, content }),
    });

    const updatedTodo = await res.json();

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded shadow">
      <h1 className="text-3xl font-extrabold text-slate-600 text-center mb-4">
        TODO LIST
      </h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            <span>{todo.content}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
