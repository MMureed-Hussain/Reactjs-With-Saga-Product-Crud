// // CreateProductsActions.js

// import { createFailure, createStart, createSuccess } from '../reducers/crateProductReducer';

// export const createProduct = (payload) => ({
//   type: createStart.type,
//   payload,
// });

// export const createProductsSuccess = () => ({
//   type: createSuccess.type,
// });

// export const createProductsFailure = (error) => ({
//   type: createFailure.type,
//   payload: error,
// });

// CreateProductsActions.js
import { createAction } from '@reduxjs/toolkit';


export const createProduct =createAction('CREATE_PRODUCT')

export const createProductsSuccess  = createAction('CREATE_PRODUCTS_SUCCESS')

export const createProductsFailure  = createAction('CREATE_PRODUCT_FAILURE')
