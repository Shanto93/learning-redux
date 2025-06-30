import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    todos: taskSlice,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
