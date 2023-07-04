// loginActions.js

import {loginFailure, loginStart, loginSuccess} from '../reducers/loginReducer'

export const loginUser = (payload) => ({
  type: loginStart.type,
  payload,
});

export const loginUserSuccess = () => ({
  type: loginSuccess.type,
});

export const loginUserFailure = (error) => ({
  type: loginFailure.type,
  payload: error,
});
