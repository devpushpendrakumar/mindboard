import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const inetialTodos = [
  {
    id: 1,
    title: "Build React Todo App",
    description:
      "Create components, hooks, and style the app using Tailwind CSS",
    dueDate: new Date("2025-06-05"),
    priority: "high",
    completed: false,
  },
  {
    id: 2,
    title: "Read JavaScript ES6 Guide",
    description: "Focus on destructuring, spread/rest, and arrow functions",
    dueDate: new Date("2025-06-02"),
    priority: "medium",
    completed: false,
  },
  {
    id: 3,
    title: "Submit MCA Assignment",
    description: "Complete Unit 2 of AI module and upload it on the portal",
    dueDate: new Date("2025-06-01"),
    priority: "high",
    completed: true,
  },
  {
    id: 4,
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and milk for the week",
    dueDate: new Date("2025-06-03"),
    priority: "low",
    completed: false,
  },
  {
    id: 5,
    title: "Practice Leetcode",
    description: "Solve 3 problems – 1 easy, 1 medium, 1 hard",
    dueDate: new Date("2025-06-04"),
    priority: "medium",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(inetialTodos);
  return (
    <div>
      <AddTodo setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
