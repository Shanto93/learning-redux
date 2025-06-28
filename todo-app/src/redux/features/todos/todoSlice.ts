import { createSlice } from "@reduxjs/toolkit";

interface ITodoState {
  todos: string[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ITodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
