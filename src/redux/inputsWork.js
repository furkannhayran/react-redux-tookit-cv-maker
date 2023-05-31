import { createSlice } from "@reduxjs/toolkit";
const inputKeys = [
    "Education",
    "Interest",
    "WorkExp"
]
export const inputSlice = createSlice({
    name: "prof",
    initialState: 0,
    reducers: {
        inputsWork: (state, action) => {
            const obj = {}
            console.log("action.payload", action.payload)
            inputKeys.map(item => {
                if (action.payload[item]) {
                    const value = action.payload[item].length - 1;
                    obj[item] = action.payload[item][value]
                }
            })
            return obj
        },
    }
})

export const { inputsWork } = inputSlice.actions

export default inputSlice.reducer