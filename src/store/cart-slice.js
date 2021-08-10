import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], totalQuantity: 0, totalPrice: 0 },
  reducers: {
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
      state.totalPrice = action.payload.totalPrice;
    },
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
    removeItemFromCart(state, action) {
      const existingItemId = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === existingItemId
      );

      if (state.totalQuantity > 1) {
        state.totalQuantity--;
      } else {
        state.totalQuantity = 0;
      }

      if (existingItem.quantity === 1) {
        state.totalPrice = Math.abs(state.totalPrice - existingItem.price);

        const updatedItems = state.items.filter(
          (item) => item.id !== existingItemId
        );
        state.items = updatedItems;
      } else {
        existingItem.quantity--;
        state.totalPrice = Math.abs(state.totalPrice - existingItem.price);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
