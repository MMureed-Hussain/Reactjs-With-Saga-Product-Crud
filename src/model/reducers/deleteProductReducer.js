// // deleteProductReducer.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   data:[],
//   loading: false,
//   error: null,
// };

// const deleteProductSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     deleteStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     deleteSuccess: (state, action) => {
//       state.data = state.data.filter((item) => item.id !== action.payload);
//       state.loading = false;
//       state.error = null;
//     },  
//     deleteFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.message = 'Error deleting product'; // Add this line
//     },
//   },
// });

// export const {
//   deleteStart,
//   deleteSuccess,
//   deleteFailure,
// } = deleteProductSlice.actions;

// export default deleteProductSlice.reducer;

// deleteProductReducer.js

import { createSlice } from '@reduxjs/toolkit';
import * as deleteProductActions from "../actions/deleteProductActions";

const initialState = {
  data:[],
  loading: false,
  error: null,
};

const deleteProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    [deleteProductActions.deleteProduct]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteProductActions.deleteProductSuccess]: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
      state.loading = false;
      state.error = null;
    },  
    [deleteProductActions.deleteProductFailure]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.message = 'Error deleting product'; // Add this line
    },
  },
});

export const {
  deleteStart,
  deleteSuccess,
  deleteFailure,
} = deleteProductSlice.actions;

export default deleteProductSlice.reducer;
