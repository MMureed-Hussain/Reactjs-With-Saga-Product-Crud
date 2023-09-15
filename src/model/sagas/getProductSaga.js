import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getFailure, getStart, getSuccess } from '../reducers/getProductReducer';

function* getProductSaga() {
  try {
    const response = yield call(axios.get,'http://localhost:8080/todo');

    // Assuming the response.data contains the fetched products
    const products = response.data;
    yield put(getSuccess(products));
    console.log("Product saga", products)
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      alert(error.response.data.message);
    } else if (error.request) {
      // Request was made but no response received (server is off)
      alert('Network error. Please try again later.');
    } else {
      // Something else happened while setting up the request
      alert('An error occurred. Please try again later.');
    }

    yield put(getFailure(error));
  }
}

export function* watchGetProduct() {
  yield takeLatest(getStart.type, getProductSaga);
}
