import { configureStore } from "@reduxjs/toolkit";
import BusSeatSlicer from "./BusSeatSlicer";
import BusCheckOutSlicer from "./BusCheckOutSlicer";
import FormToggle from "./FormToggleSlicer";

const store = configureStore({
  reducer: {
    FormToggle: FormToggle,
    BusSeats: BusSeatSlicer,
    BusCheckOut: BusCheckOutSlicer,
  },
});
export default store;
