import type { RootState } from "@/redux/store";
import type { IUser } from "@/type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialUserState {
  users: IUser[];
}

const initialState: IInitialUserState = {
  users: [
    {
      name: "shanto",
      email: "shanto@gmail.com",
    },
    {
      name: "sanjida",
      email: "sanjida@gmail.com",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.email !== action.payload);
    },
  },
});

export const getUsers = (state: RootState) => {
  return state.users.users;
};

export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
