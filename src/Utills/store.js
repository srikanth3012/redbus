import { configureStore } from "@reduxjs/toolkit";
import BusSeatSlicer from "./BusSeatSlicer";
import BusCheckOutSlicer from "./BusCheckOutSlicer";
import FormToggle from "./FormToggleSlicer";
import ExistingUserslicer from "./ExistingUserslicer";

const store = configureStore({
  reducer: {
    FormToggle: FormToggle,
    BusSeats: BusSeatSlicer,
    BusCheckOut: BusCheckOutSlicer,
    ExistUser: ExistingUserslicer,
  },
});
export default store;
