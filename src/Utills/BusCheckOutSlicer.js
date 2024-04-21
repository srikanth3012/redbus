import { createSlice } from "@reduxjs/toolkit";

const busCheckOutSlicer = createSlice({
  name: "BusCheckOut",
  initialState: { CheckOut: [], confirmeSeats: [] },
  reducers: {
    addDetails(state, { payload }) {
      state.CheckOut.unshift(payload);
    },
    confirmedSeats(state, { payload }) {
      state.confirmeSeats.unshift(payload);
    },
  },
});
export const { addDetails, confirmedSeats } = busCheckOutSlicer.actions;
export default busCheckOutSlicer.reducer;
