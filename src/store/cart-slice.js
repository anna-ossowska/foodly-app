import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          quantity: newItem.quantity,
        });
        state.totalPrice = state.totalPrice + newItem.price * newItem.quantity;
        state.totalQuantity = state.totalQuantity + newItem.quantity;
      } else {
        // remove totals based on old quantity
        state.totalPrice =
          state.totalPrice - existingItem.quantity * existingItem.price;

        state.totalQuantity = state.totalQuantity - existingItem.quantity;

        // update quantity and totals
        existingItem.quantity = existingItem.quantity + newItem.quantity;

        state.totalPrice =
          state.totalPrice + existingItem.quantity * existingItem.price;

        state.totalQuantity = state.totalQuantity + existingItem.quantity;
      }
    },
    removeItemFromCart(state) {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
