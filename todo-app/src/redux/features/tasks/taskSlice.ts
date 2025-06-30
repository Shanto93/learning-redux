import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v7 as uuidv7 } from "uuid";
interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "wrwerewjkkj",
      title: "skjdf",
      description: "dfoisiod",
      dueDate: "asdfo",
      priority: "high",
      isCompleted: true,
    },
    {
      id: "wrwerew",
      title: "skjdf",
      description: "dfoisiod",
      dueDate: "asdfo",
      priority: "high",
      isCompleted: false,
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
