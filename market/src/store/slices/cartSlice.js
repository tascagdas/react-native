import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.value += 1;
      state.products.push(action.payload);
    },
    clearCart: state => {
      state.value = 0;
      state.products = [];
    },
  },
});

export const {addtoCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
