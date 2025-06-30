import type { RootState } from "@/redux/store";
import type { ITask } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v7 as uuidv7 } from "uuid";
interface IInitialState {
  tasks: ITask[];
}

const initialState: IInitialState = {
  tasks: [],
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
  },
});

export const selectTasks = (state: RootState) => {
  return state.todos.tasks;
};

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
