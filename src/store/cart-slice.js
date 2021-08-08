import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      // const existingItem = state.items.find(
      //   (item) => item.id === action.payload.id
      // );
    },
    removeItemFromCart(state) {},
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
