// // updateProductSaga.js

// import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import * as updateProductActions from "../actions/updateProductActions"
// // import { updateFailure, updateStart, updateSuccess } from '../reducers/updateProductReducer';

// function* updateProductSaga(action) {
//   const { id, formData } = action.payload;

//   try {
//     const response = yield call(axios.put,`http://localhost:8000/todo/${id}`, formData);
//     yield put(updateProductActions.updateProductSuccess);
//     toast.success('Product updated successfully');
//     alert("Product updated successfully");
//   } catch (error) {
//     if (error.response) {
//       // Server responded with a status code outside the range of 2xx
//       alert(error.response.data.message);
//     } else if (error.request) {
//       // Request was made but no response received (server is off)
//       alert('Network error. Please try again later.');
//     } else {
//       // Something else happened while setting up the request
//       alert('An error occurred. Please try again later.');
//     }

//     yield put(updateProductActions.updateProductFailure);
//   }
// }

// export function* watchUpdateProduct() {
//   yield takeLatest(updateProductActions.updateProduct, updateProductSaga);
// }


// updateProductSaga.js

import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as updateProductActions from "../actions/updateProductActions"
// import { updateFailure, updateStart, updateSuccess } from '../reducers/updateProductReducer';

function* updateProductSaga(action) {
  const { id, formData } = action.payload;

  try {
    const response = yield call(axios.put,`http://localhost:8000/todo/${id}`, formData);
    yield put(updateProductActions.updateProductSuccess(response.data));
    alert("Product updated successfully");
    toast.success('Product updated successfully');
  }
  // } catch (error) {
  //   if (error.response) {
  //     // Server responded with a status code outside the range of 2xx
  //     alert(error.response.data.message);
  //   } else if (error.request) {
  //     // Request was made but no response received (server is off)
  //     alert('Network error. Please try again later.');
  //   } else {
  //     // Something else happened while setting up the request
  //     alert('An error occurred. Please try again later.');
  //   }
  catch (err) {
    alert("Error in Updating Product");
    yield put(updateProductActions.updateProductFailure);
  }
}

export function* watchUpdateProduct() {
  yield takeLatest(updateProductActions.updateProduct, updateProductSaga);
}


