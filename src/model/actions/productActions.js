// productActions.js

import { createFailure, createStart, createSuccess, deleteFailure, deleteStart, deleteSuccess, readFailure, readStart, readSuccess, updateFailure, updateStart, updateSuccess } from "../reducers/productReducer";

export const createProductStart = (payload) => ({
    // type: 'product/CREATE_START',
    type: createStart.type,
    payload,
  });
  
  export const createProductSuccess = (payload) => ({
    type: createSuccess.type,
    payload,
  });
  
  export const createProductError = (error) => ({
    type: createFailure.type,
    error,
  });
  
  export const readProductStart = () => ({
    type: readStart.type,
  });
  
  export const readProductSuccess = (payload) => ({
    type: readSuccess.type,
    payload,
  });
  
  export const readProductError = (error) => ({
    type: readFailure.type,
    error,
  });
  
  export const updateProductStart = (payload) => ({
    type: updateStart.type,
    payload,
  });
  
  export const updateProductSuccess = (payload) => ({
    type: updateSuccess.type,
    payload,
  });
  
  export const updateProductError = (error) => ({
    type: updateFailure.type,
    error,
  });
  
  export const deleteProductStart = (payload) => ({
    type: deleteStart.type,
    payload,
  });
  
  export const deleteProductSuccess = (payload) => ({
    type: deleteSuccess.type,
    payload,
  });
  
  export const deleteProductError = (error) => ({
    type: deleteFailure.type,
    error,
  });
  