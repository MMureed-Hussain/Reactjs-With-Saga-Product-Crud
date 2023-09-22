import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { toast } from 'react-toastify';
import { loginStart,loginSuccess,loginFailure } from '../reducers/loginReducer';

function* loginUserSaga(action) {
  const { navigate } = action.payload;

  try {
    const {email, password } = action.payload.formData;

    const response = yield call(axios.post,'http://localhost:8000/api/login', {
      email,
      password,
    });
    localStorage.setItem("token", response.data.access_token);
    toast('Loging successful');
    yield put(loginSuccess());
    alert("Login successful");
    console.log(response.data);
    yield call(navigate, '/');
  } catch (error) {
    if (error.response) {
      // Server responded with a status code outside the range of 2xx
      alert(error.response.data.message);
      yield call(navigate, '/login');
    } else if (error.request) {
      // Request was made but no response received (server is off)
      alert('Network error. Please try again later.');
    } else {
      // Something else happened while setting up the request
      alert('An error occurred. Please try again later.');
    }

    yield put(loginFailure(error));
  }
}

export function* watchLoginUser() {
  yield takeLatest(loginStart.type, loginUserSaga);
}
