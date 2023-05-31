import { createSlice } from "@reduxjs/toolkit";
const rickKeys = [
    "Education",
    "Profile",
    "WorkExp",
    "Education",
    "Courses",
    "CustomSelection",
    "Publication",
    "Success"
]
// const inputKeys = [
//     "Education",
//     "Interest",
//     "WorkExp"
// ]
export const propertySlice = createSlice({
    name: "prof",
    initialState: 0,
    reducers: {
        rickTextProfile: (state, action) => {
            if (action.payload !== "") {
                const obj = {};
                rickKeys.map(item => {
                    if (action.payload[item]) {
                        obj[item] = action.payload[item][action.payload[item].length - 1]
                        console.log(obj)
                    }
                })
                console.log("rick obj" , obj)
                return obj
            }
            return ""
        },
        // inputChangeValue: (state, action) => {
        //     const obj = {}
        //     console.log("action.payload", action.payload)
        //     inputKeys.map(item => {
        //         if (action.payload[item]) {
        //             const value = action.payload[item].length - 1;
        //             obj[item] = action.payload[item][value]
        //             // const value = action.payload[item][0]
        //             // obj[item] = value
        //         }

        //     })
        //     console.log("obj", obj)
        //     return obj
        // },

        // inputWorktitle: (state, action) => {
        //     const obj = {}
        //     inputKeys.map(item => {
        //         if (action.payload[item]) {
        //             const value = action.payload[item][0]
        //             obj[item] = value
        //         }

        //     })
        //     console.log(obj)
        //     return obj
        // },
        // inputCity: (state, action) => {
        //     const obj = {}
        //     inputKeys.map(item => {
        //         if (action.payload[item]) {
        //             const value = action.payload[item][0]
        //             obj[item] = value
        //         }
        //     })
        //     console.log(obj)
        //     return obj
        // },
    }
})

export const { rickTextProfile,
    //  inputChangeValue, inputWorktitle, inputCity
     } = propertySlice.actions

export default propertySlice.reducer