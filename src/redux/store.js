import { configureStore } from "@reduxjs/toolkit";
import property from "./property";
export const store = configureStore({
    reducer: {
        property : property,
    },
  })