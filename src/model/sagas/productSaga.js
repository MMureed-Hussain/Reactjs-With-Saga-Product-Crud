import { takeLatest, put, call } from 'redux-saga/effects';
import {
  createStart,
  createSuccess,
  readSuccess,
  updateStart,
  updateSuccess,
  deleteStart,
  deleteSuccess,
  createFailure,
  readFailure,
  updateFailure,
  deleteFailure,
  readStart,
} from '../reducers/productReducer'
// import * as API from './api'; // Import your API functions for CRUD operations

const endPoint = "http://localhost:8000";

function* createProductSaga(action) {
  try {
    yield put(createStart()); // Set loading state
    // const newProduct = yield call(API.createProduct, action.payload); // Call your API function to create a product
    const newProduct = yield call(`http://localhost:8000/todo`, action.payload); // Call your API function to create a product
    yield put(createSuccess(newProduct)); // Dispatch success action with the created product
    alert("Create Product Success")
  } catch (error) {
    yield put(createFailure(error.message)); // Dispatch failure action with the error message
    alert("Error on Create Product")
 
  }
}

function* readProductSaga() {
  try {
    yield put(readStart());
    // const products = yield call(API.getProducts); // Call your API function to get the products
    const products = yield call('http://localhost:8000/todo'); // Call your API function to get the products
    yield put(readSuccess(products)); // Dispatch success action with the retrieved products
    alert("Read Product Success")
  } catch (error) {
    yield put(readFailure(error.message)); // Dispatch failure action with the error message
    alert("Error on Reading Product")
  
  }
}

function* updateProductSaga(action) {
  try {
    yield put(updateStart()); // Set loading state
    // const updatedProduct = yield call(API.updateProduct, action.payload); // Call your API function to update a product
    const updatedProduct = yield call(`http://localhost:8000/todo`, action.payload); // Call your API function to update a product
    yield put(updateSuccess(updatedProduct)); // Dispatch success action with the updated product
    alert("Updated Product Success")
  } catch (error) {
    yield put(updateFailure(error.message)); // Dispatch failure action with the error message
    alert("Error on Product Updated")
  
  }
}

function* deleteProductSaga(action) {
  try {
    yield put(deleteStart()); // Set loading state
    // yield call(API.deleteProduct, action.payload); // Call your API function to delete a product
    yield call(`http://localhost:8000/todo`, action.payload); // Call your API function to delete a product
    yield put(deleteSuccess(action.payload)); // Dispatch success action with the deleted product ID
    alert("Delete Product Success")
  
  } catch (error) {
    yield put(deleteFailure(error.message)); // Dispatch failure action with the error message
    alert("Error deleting Product")
 
  }
}

export default function* watchProductSaga() {
  yield takeLatest(createStart.type, createProductSaga);
  yield takeLatest(readStart.type, readProductSaga);
  yield takeLatest(updateStart.type, updateProductSaga);
  yield takeLatest(deleteStart.type, deleteProductSaga);
}
