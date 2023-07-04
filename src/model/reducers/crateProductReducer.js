// // registrationReducer.js

// import { createSlice } from '@reduxjs/toolkit';
// import * as createProducActions from '../actions/createProducActions'
// const initialState = {
//   loading: false,
//   error: null,
// };

// const createProductSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     createStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     createSuccess: (state) => {
//       state.loading = false;
//     },
//     createFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { createStart, createSuccess, createFailure } =createProductSlice.actions;

// export default createProductSlice.reducer;

// registrationReducer.js

import { createSlice } from '@reduxjs/toolkit';
import * as createProducActions from '../actions/createProducActions'
const initialState = {
  loading: false,
  error: null,
};
// 
const createProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    [createProducActions.createProduct]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [createProducActions.createProductsSuccess]: (state) => {
      state.loading = false;
    },
    [createProducActions.createProductsFailure]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const loading = (state) => state.product.loading;
const error = (state) => state.product.error;

const selectors = {
  loading,
  error,
};

export { initialState, selectors };

export default createProductSlice.reducer;
