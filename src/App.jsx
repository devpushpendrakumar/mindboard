import { useState } from "react";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/todos/AddTodo";
import Idea from "./components/ideas/IdeaList";
import AddIdea from "./components/ideas/AddIdea";
import styles from "../src/App.module.css";

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
  const [displayNewIdea, setDisplayNewIdea] = useState(false);
  return (
    <div className={styles.ideaDashboard}>
      <div>
        <Idea setNewIdea={setDisplayNewIdea} />
      </div>
      <div>
        {displayNewIdea ? (
          <AddIdea />
        ) : (
          <>
            <AddTodo setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
