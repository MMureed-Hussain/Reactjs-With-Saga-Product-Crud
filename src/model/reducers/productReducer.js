// productReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    createStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    createSuccess: (state, action) => {
      state.data.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    createFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    readStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    readSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    readFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload.data : item
      );
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteSuccess: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createStart,
  createSuccess,
  createFailure,
  readStart,
  readSuccess,
  readFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteStart,
  deleteSuccess,
  deleteFailure,
} = productSlice.actions;

export default productSlice.reducer;
