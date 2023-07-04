// rootSaga.js

import { all } from 'redux-saga/effects';
import { watchRegisterUser } from './sagas/registrationSaga';
import { watchLoginUser } from './sagas/loginSaga';
import { watchCreateProduct} from './sagas/createProductSaga';
import { watchGetProduct } from './sagas/getProductSaga';
import { watchUpdateProduct } from './sagas/updateProductSaga';
import {watchDeleteProduct} from './sagas/deleteProductSaga';

export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchLoginUser(),
    watchCreateProduct(),
    watchGetProduct(),
    watchUpdateProduct(),
    watchDeleteProduct(),

    // Add other sagas here if needed
  ]);
}
