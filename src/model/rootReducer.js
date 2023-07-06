// rootReducer.js

import { combineReducers } from 'redux';
import registrationReducer from './reducers/registrationReducer';
import loginReducer from './reducers/loginReducer';
import crateProductReducer from './reducers/crateProductReducer';
import getProductReducer from './reducers/getProductReducer';
import updateProductReducer from './reducers/updateProductReducer';
import deleteProductReducer from './reducers/deleteProductReducer';
import productDetailsReducer from './reducers/productDetailsReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login:loginReducer,
  product:crateProductReducer,
  products:getProductReducer,
  product:updateProductReducer,
  product:deleteProductReducer,
  product:productDetailsReducer
});

export default rootReducer;
