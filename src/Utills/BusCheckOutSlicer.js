import { createSlice } from "@reduxjs/toolkit";

const busCheckOutSlicer = createSlice({
  name: "BusCheckOut",
  initialState: { CheckOut: [] },
  reducers: {
    addDetails(state, { payload }) {
      state.CheckOut.push(payload);
    },
  },
});
export const { addDetails } = busCheckOutSlicer.actions;
export default busCheckOutSlicer.reducer;
