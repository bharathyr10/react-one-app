import { createSlice } from "@reduxjs/toolkit";

const initialState = { language: "dk" };
export const languageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    languageChanged(state, action) {
      const { language } = action.payload;
      //console.log(language);
      state.language = language;
      localStorage.setItem("language", language);
      //console.log("state", state.language);
    },
  },
});

export const { languageChanged } = languageSlice.actions;
export default languageSlice.reducer;
