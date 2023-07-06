import { call, put, takeLatest } from 'redux-saga/effects';
// import { fetchProductRequest, fetchProductSuccess, fetchProductFailure } from '../actions/productActions';
import axios from 'axios';
import { fetchProductFailure, fetchProductRequest, fetchProductSuccess } from '../actions/productDetailsAction';

function* fetchProductSaga(action) {
  try {
    const { id } = action.payload;
    const response = yield call(axios.get, `http://localhost:8000/todo/${id}`);
    const product = response.data;
    yield put(fetchProductSuccess(product));
    console.log("Product details saga", product)
  } catch (error) {
    yield put(fetchProductFailure(error.message));
  }
}

function* detailsProductSaga() {
  yield takeLatest(fetchProductRequest, fetchProductSaga);
}

export default detailsProductSaga;
