import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v7 as uuidv7 } from "uuid";
import { deleteUser } from "../users/userSlice";
interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "a2335345322423",
      title: "Learning Node.js",
      description: "learn node.js",
      dueDate: "2025-06-30",
      assignTo: "a1767216731836",
      priority: "high",
      isCompleted: true,
    },
    {
      id: "b1312242234",
      title: "Learning Redux",
      description: "Learning Redux",
      dueDate: "2025-07-02",
      assignTo: "",
      priority: "low",
      isCompleted: false,
    },
    {
      id: "b1312242234",
      title: "Learning Mongoose",
      description: "Learning Mongoose",
      dueDate: "2025-07-11",
      assignTo: "1267416g12t3",
      priority: "medium",
      isCompleted: true,
    },
  ],
  filter: "all",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const taskData = {
        ...action.payload,
        id: uuidv7(),
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },

    toggleCompleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;

      state.tasks.forEach((task) =>
        task.id === id ? (task.isCompleted = !task.isCompleted) : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    filterTasksByPriority: (
      state,
      action: PayloadAction<"all" | "low" | "high" | "medium">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.assignTo === action.payload ? (task.assignTo = null) : task
      );
    });
  },
});

export const selectTasks = (state: RootState) => {
  const filterTask = state.todos.filter;
  if (state.todos.filter === "low") {
    return state.todos.tasks.filter((task) => task.priority === filterTask);
  } else if (state.todos.filter === "high") {
    return state.todos.tasks.filter((task) => task.priority === filterTask);
  } else if (state.todos.filter === "medium") {
    return state.todos.tasks.filter((task) => task.priority === filterTask);
  } else {
    return state.todos.tasks;
  }
};

export const {
  addTask,
  toggleCompleteTask,
  deleteTask,
  filterTasksByPriority,
} = taskSlice.actions;
export default taskSlice.reducer;
