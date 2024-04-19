import { createSlice } from "@reduxjs/toolkit";

const busCheckOutSlicer = createSlice({
  name: "BusCheckOut",
  initialState: { CheckOut: [] },
  reducers: {
    addDetails(state, { payload }) {
      state.CheckOut.unshift(payload);
    },
  },
});
export const { addDetails } = busCheckOutSlicer.actions;
export default busCheckOutSlicer.reducer;
