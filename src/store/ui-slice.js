import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isCartShown: false },
  reducers: {
    showCart(state) {
      state.isCartShown = true;
      document.getElementById('root').style.backdropFilter = 'blur(5px)';
    },

    hideCart(state) {
      state.isCartShown = false;
      document.getElementById('root').style.backdropFilter = 'blur(0)';
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
