import { configureStore } from "@reduxjs/toolkit";
import BusSeatSlicer from "./BusSeatSlicer";
import BusCheckOutSlicer from "./BusCheckOutSlicer";

const store = configureStore({
  reducer: {
    BusSeats: BusSeatSlicer,
    BusCheckOut: BusCheckOutSlicer,
  },
});
export default store;
