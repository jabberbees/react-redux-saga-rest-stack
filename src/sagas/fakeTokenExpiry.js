import { getContext, call, put, takeLatest } from 'redux-saga/effects';

import {
  signInSuccess
} from '../actions';

import { FAKE_TOKEN_EXPIRY_REQUEST } from '../actionTypes';

function* fakeTokenExpirySaga(action) {
  const api = yield getContext('api');
  yield call(api.fakeTokenExpiry);
  yield put(signInSuccess());
}

export function* fakeTokenExpiry() {
  yield takeLatest(FAKE_TOKEN_EXPIRY_REQUEST, fakeTokenExpirySaga);
}
