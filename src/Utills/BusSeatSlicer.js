import { createSlice } from "@reduxjs/toolkit";

const BusSeatSlicer = createSlice({
  name: "BusSeats",
  initialState: {
    Seats: [],
  },
  reducers: {
    addSeats(state, { payload }) {
      state.Seats.push(payload);
    },
    delSeats: (state, { payload }) => {
      state.Seats = state.Seats.filter((item) => item !== payload);
    },
    emptySeats: (state) => {
      state.Seats = [];
    },
  },
});
export const { addSeats, delSeats, emptySeats } = BusSeatSlicer.actions;
export default BusSeatSlicer.reducer;
