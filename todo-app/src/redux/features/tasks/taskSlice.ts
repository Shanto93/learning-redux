import type { ITask } from "@/type";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  task: ITask[];
}

const initialState: IInitialState = {
  task: [
    {
      id: "jasdkn",
      title: "Task Title",
      description: "Task Description",
      dueDate: "2023-10-01",
      priority: "Medium",
      isCompleted: false,
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
export default taskSlice.reducer;
