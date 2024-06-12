import { configureStore } from "@reduxjs/toolkit";
import codeSlice from "./slices/codeSlice";

export const store = configureStore({
  reducer: {
    codeSlice,
  },
});
