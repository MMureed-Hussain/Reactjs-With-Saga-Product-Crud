import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from '../reducers/registrationReducer';

function* registerUserSaga(action) {
  const { navigate } = action.payload;
  try {
    const { name, email, password } = action.payload.formData;
    const response = yield call(axios.post,'http://localhost:8000/api/register', {
      name,
      email,
      password,
    });

    toast.success('Registration successful');
    alert(response.data.message);
    yield put(registerSuccess());
    yield call(navigate, '/login');
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      alert(error.response.data.message);
      yield call(navigate, '/');
    } else if (error.request) {
      // Request was made but no response received (server is off)
      alert('Network error. Please try again later.');
    } else {
      // Something else happened while setting up the request
      alert('An error occurred. Please try again later.');
    }

    yield put(registerFailure(error));
  }
}

export function* watchRegisterUser() {
  yield takeLatest(registerStart.type, registerUserSaga);
}
