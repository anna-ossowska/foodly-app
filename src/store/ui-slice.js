import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartShown: false, isNotifShown: false },
  reducers: {
    showCart(state) {
      state.isCartShown = true;
    },

    hideCart(state) {
      state.isCartShown = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
