import { configureStore } from "@reduxjs/toolkit";
import property from "./property";
import inputChange from "./inputChange";
import inputsCity from "./inputsCity";
import inputsWork from "./inputsWork";
export const store = configureStore({
    reducer: {
        property : property,
        inputChange : inputChange,
        inputsCity :inputsCity,
        inputsWork :inputsWork,
        
    },
  })