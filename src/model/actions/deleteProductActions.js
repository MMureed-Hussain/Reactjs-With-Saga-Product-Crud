// // productActions.js

// import { deleteFailure, deleteStart, deleteSuccess } from "../reducers/deleteProductReducer";


// export const deleteProduct = (payload) => ({
//     type: deleteStart.type,
//     payload:payload,
//   });
  
//   export const deleteProductSuccess = (payload) => ({
//     type: deleteSuccess.type,
//     payload,
//   });
  
//   export const deleteProductError = (error) => ({
//     type: deleteFailure.type,
//     payload: error.message, // Update this line
//   });
  
// productActions.js

import { createAction } from '@reduxjs/toolkit';

export const deleteProduct =createAction("DELETE_PRODUCT")
  
  export const deleteProductSuccess =createAction("DELETE_PRODUCT_SUCCESS") 
  
  export const deleteProductFailure =createAction("DELETE_PRODUCT_FAILURE") 
  