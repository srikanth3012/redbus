import { createSlice } from "@reduxjs/toolkit";

const ExistingUserSlicer = createSlice({
  name: "ExistUser",
  initialState: {
    ExistUser: [],
  },
  reducers: {
    addUser(state, { payload }) {
      state.ExistUser.push(payload);
    },
  },
});
export const { addUser } = ExistingUserSlicer.actions;
export default ExistingUserSlicer.reducer;
