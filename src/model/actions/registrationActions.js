// registrationActions.js

import { registerStart, registerSuccess, registerFailure } from '../reducers/registrationReducer';

export const registerUser = (payload) => ({
  type: registerStart.type,
  payload,
});


export const registerUserSuccess = () => ({
  type: registerSuccess.type,
});

export const registerUserFailure = (error) => ({
  type: registerFailure.type,
  payload: error,
});
