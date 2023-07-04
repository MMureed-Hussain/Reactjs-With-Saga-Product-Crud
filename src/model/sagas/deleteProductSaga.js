import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import * as deleteProductActions from "../actions/deleteProductActions";

function* deleteProductSaga(action) {
  const id = action.payload;

  try {
    yield call(axios.delete,`http://localhost:8000/todo/${id}`);
    yield put(deleteProductActions.deleteProductSuccess(id));//
    toast.success('Product deleted successfully');
    alert('Product deleted successfully');
  } catch (error) {
    toast.error('Error in Product deleting');
    alert('Error in Product deleting');
    yield put(deleteProductActions.deleteProductFailure(error));
  }
}

export function* watchDeleteProduct() {
  yield takeLatest(deleteProductActions.deleteProduct,deleteProductSaga);
}
