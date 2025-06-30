import type { RootState } from "@/redux/store";
import type { IUser } from "@/type";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialUserState {
  users: IUser[];
}

const initialState: IInitialUserState = {
  users: [
    {
      u_id: "a1767216731836",
      name: "shanto",
      email: "shanto@gmail.com",
    },
    {
      u_id: "1267416g12t3",
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
      const userData = {
        ...action.payload,
        u_id: nanoid(),
      };
      state.users.push(userData);
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
