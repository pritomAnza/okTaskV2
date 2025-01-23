"use client"
import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };


  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(tasks[index]);
  };

  // Save Edited Task
  const saveTask = () => {
    if (editingText.trim()) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? editingText : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
      setEditingText("");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      {/* Input and Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaPlus />
        </button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow"
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="flex-1 px-2 py-1 border rounded mr-2"
              />
            ) : (
              <span className="flex-1">{task}</span>
            )}

            <div className="flex items-center gap-2">
              {editingIndex === index ? (
                <button
                  onClick={saveTask}
                  className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => startEditing(index)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <FaEdit />
                </button>
              )}
              <button
                onClick={() => deleteTask(index)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
