import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "jasdkn",
      title: "Task Title",
      description: "Task Description",
      dueDate: "2023-10-01",
      priority: "high",
      isCompleted: false,
    },
    {
      id: "lahsf",
      title: "Task Title2",
      description: "Task Description",
      dueDate: "2023-10-01",
      priority: "medium",
      isCompleted: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todos.tasks;
};

// export const {} = todoSlice.actions;
export default taskSlice.reducer;
