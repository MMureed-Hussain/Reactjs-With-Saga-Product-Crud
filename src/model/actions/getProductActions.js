// getProductActions.js

import { getFailure, getStart, getSuccess } from '../reducers/getProductReducer';

export const fetchProducts = () => ({
  type: getStart.type,
});

export const fetchProductsSuccess = (products) => ({
  type: getSuccess.type,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: getFailure.type,
  payload: error,
});

