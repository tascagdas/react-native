import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    products: []
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            state.value += 1
            state.products.push(action.payload)
        }
    }
})

export const { addtoCart } = cartSlice.actions
export default cartSlice.reducer