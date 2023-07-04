// // ipdateProductActions.js

// import {updateFailure, updateStart, updateSuccess} from '../reducers/updateProductReducer'  

// export const updateProduct = (payload) => ({
//     type: updateStart.type,
//     payload,
//   });

//   export const updateProductSuccess = (payload) => ({
//     type: updateSuccess.type,
//     payload,
//   });

//   export const updateProductFailure = (error) => ({
//     type: updateFailure.type,
//     error,
//   });
//   //


// ipdateProductActions.js
import { createAction  } from '@reduxjs/toolkit';

export const updateProduct =createAction('UPDATE_PRODUCT');

export const updateProductSuccess =createAction('UPDATE_PRODUCT_SUCCEESS');

export const updateProductFailure =createAction('UPDATE_PRODUCT_FAILURE');
