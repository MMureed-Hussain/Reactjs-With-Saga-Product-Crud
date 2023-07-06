import { createAction } from '@reduxjs/toolkit';

export const fetchProductRequest = createAction('FETCH_PRODUCT_REQUEST');
export const fetchProductSuccess = createAction('FETCH_PRODUCT_SUCCESS');
export const fetchProductFailure = createAction('FETCH_PRODUCT_FAILURE');
