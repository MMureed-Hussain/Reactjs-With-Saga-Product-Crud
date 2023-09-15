import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as createProducActions from '../actions/createProducActions'
// import { createFailure, createStart, createSuccess } from '../reducers/crateProductReducer';
import { toast } from 'react-toastify';


// function* createProductSaga(action) {
//   const { navigate } = action.payload;

//   try {
//     const { name, price} = action.payload.formData;

//     const response = yield call(axios.post,'http://localhost:8000/todo', {
//       name,
//       price,
//     });
//     yield put(createSuccess(response.data));
//     alert("Create Successfully");
//     toast.success('UPDATED', { autoClose: 3000 });
//     console.log(response.data); 
//   } catch (err) {
//     alert("Error in Create ");
//     yield put(createFailure(err));
//   }
// }

function* createProductSaga(action) {
  const { navigate } = action.payload;

  try {
    const { name, price} = action.payload.formData;

    const response = yield call(axios.post,'http://localhost:8080/todo', {
      name,
      price,
    });
    yield put(createProducActions.createProductsSuccess(response.data));
    alert("Create Successfully");
    toast.success('UPDATED', { autoClose: 3000 });
    console.log(response.data); 
  } catch (err) {
    alert("Error in Create ");
    yield put(createProducActions.createProductsFailure(err));
  }
}

export function* watchCreateProduct() {
  yield takeLatest(createProducActions.createProduct, createProductSaga);
}
