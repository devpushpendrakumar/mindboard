import React from "react";
import { useState } from "react";

function AddTodo({ setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [completed, setCompleted] = useState(false);

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("low");
    setCompleted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title,
      description,
      dueDate,
      priority,
      completed,
    };

    setTodos((prevTodos) => [
      {
        ...newTodo,
        id: prevTodos.length + 1, // Simple ID generation
        dueDate: new Date(dueDate), // Convert string to Date object
      },
      ...prevTodos,
    ]);
    resetFields();
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter todo title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            autoFocus
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter todo description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            autoComplete="off"
            rows="3"
            cols="30"
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </div>
        <label
          htmlFor="priority"
          className="block text-sm font-medium text-gray-700"
        >
          Priority
        </label>
        <select
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
          id="priority"
          name="priority"
        >
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          onClick={handleSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
