// // updateProductReducer.js

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   error: null,
// };

// const updateProductSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     updateStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     updateSuccess: (state, action) => {
//       state.data = state.data.map((item) =>
//         item.id === action.payload.id ? action.payload.data : item
//       );
//       state.loading = false;
//       state.error = null;
//     },
//     updateFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   updateStart,
//   updateSuccess,
//   updateFailure,
// } = updateProductSlice.actions;

// export default updateProductSlice.reducer;

// updateProductReducer.js

import { createSlice } from '@reduxjs/toolkit';
import * as updateProductActions from '../actions/updateProductActions'

const initialState = {
  loading: false,
  error: null,
};
const updateProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    [updateProductActions.updateProduct]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateProductActions.updateProductSuccess]: (state, action) => {
      state.data = state.data.map((item) =>
        item.id === action.payload.id ? action.payload.data : item
      );
      state.loading = false;
      state.error = null;
    },
    [updateProductActions.updateProductFailure]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  [updateProductActions.updateProduct]: updateStart,
  [updateProductActions.updateProductSuccess]: updateSuccess,
  [updateProductActions.updateProductFailure]: updateFailure,
} = updateProductSlice.actions;


export default updateProductSlice.reducer;
