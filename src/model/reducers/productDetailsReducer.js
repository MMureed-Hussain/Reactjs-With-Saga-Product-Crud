import { createSlice } from '@reduxjs/toolkit';
import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from "../actions/productDetailsAction";

const initialState = {
  loading: false,
  error: null,
  product: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductRequest, (state) => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductSuccess, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
