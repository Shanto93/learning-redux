import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
// import taskSlice from "./features/tasks/taskSlice";
// import userReducer from "./features/users/userSlice";

export const store = configureStore({
  reducer: {
    // todos: taskSlice,
    // users: userReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
