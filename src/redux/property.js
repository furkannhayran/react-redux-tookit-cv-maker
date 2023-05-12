import { createSlice } from "@reduxjs/toolkit";
const data = []
export const propertySlice = createSlice({
    name: "prof",
    initialState: 0,
    reducers: {
        rickTextProfile: (state, action) => {
            if (action.payload !== "") {
                // if (data.length > 0) {
                //     var dataGroup = data.reduce((result, item) => {
                //         (result[Object.keys(item)] = result[Object.keys(item)] || []).push(item);
                //         return result;
                //     })
                // }
                data.push(action.payload)
                console.log(data)
                return action.payload
            }
            return ""
        }
    }
})

export const { rickTextProfile } = propertySlice.actions

export default propertySlice.reducer