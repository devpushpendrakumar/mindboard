import React from "react";

function Task({ todos, setTodos }) {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    if (!edit) {
      setEdit(true);
      return;
    }
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.title = title;
        todo.description = description;
        todo.dueDate = new Date(dueDate);
        todo.priority = priority;
      }
    });
    setTodos([...todos]);
    setEdit(false);
  };

  const handleToggle = (id) => {
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    setTodos([...todos]);
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-4 list-none" style={{ listStyleType: "none" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-4 rounded-lg shadow-md ${
              todo.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              className="h-4 w-4 text-indigo-600"
            />
            <span
              className={
                todo.completed
                  ? "line-through text-red-400 text-xl font-bold"
                  : "text-xl font-bold"
              }
            >
              {todo.title}
            </span>

            <p className="text-gray-600">{todo.description}</p>
            <p className="text-sm text-gray-500">
              Due:{" "}
              {todo.dueDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}{" "}
              | Priority: {todo.priority}
            </p>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              onClick={handleEdit}
            >
              {edit ? "Save" : "Edit"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
