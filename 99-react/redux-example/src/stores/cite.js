import { createSlice } from "@reduxjs/toolkit";

export const cite = createSlice({
  name: "counter",
  initialState: {
    dark: false,
    language: "tr",
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setDarkMode, setLanguage } = cite.actions;

export default cite.reducer;
