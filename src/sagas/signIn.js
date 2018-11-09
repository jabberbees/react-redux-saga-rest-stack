import { getContext, call, put, takeLatest } from 'redux-saga/effects';

import {
  signInSuccess, signInFailure
} from '../actions';
import { SIGN_IN_REQUEST } from '../actionTypes';

import { errorMessage } from './helpers';

function* signInSaga(action) {
  try {
    const api = yield getContext('api');
    const { payload: { login, password } } = action;
    yield call(api.signIn, login, password);
    yield put(signInSuccess());
  }
  catch (error) {
    yield put(signInFailure(errorMessage(error)));
  }
}

export function* signIn() {
  yield takeLatest(SIGN_IN_REQUEST, signInSaga);
}
