// getProductReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  products: [], // Array to store fetched products
};

const getProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload; // Update products array with fetched data
    },
    getFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getStart, getSuccess, getFailure } = getProductSlice.actions;

export default getProductSlice.reducer;
