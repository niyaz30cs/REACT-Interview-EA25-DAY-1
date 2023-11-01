import { createSlice } from "@reduxjs/toolkit"
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        addition: (state, action) => {
            state.value = state.value + 1
        },
        substrat: (state, action) => {
            state.value = state.value - 1
        },
        multiply: (state, action) => {
            state.value *= 2
        },
        division: (state, action) => {
            state.value /= 2
        }

    }

})

export const { addition, substrat, multiply, division } = counterSlice.actions;
export default counterSlice.reducer;