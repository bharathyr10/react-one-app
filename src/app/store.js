import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../translations/languageSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});
