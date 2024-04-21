import { createSlice } from "@reduxjs/toolkit";

const FormToggleSlicer = createSlice({
  name: "FormToggle",
  initialState: {
    formToggle: false,
  },
  reducers: {
    handleFormToggle(state) {
      state.formToggle = !state.formToggle;
    },
  },
});
export const { handleFormToggle } = FormToggleSlicer.actions;
export default FormToggleSlicer.reducer;
