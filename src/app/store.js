import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ideasReducer from "../features/ideas/ideasSlice";
import tasksReducer from "../features/tasks/tasksSlice";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ideas: ideasReducer,
    tasks: tasksReducer,
    todos: todosReducer,
  },
});
