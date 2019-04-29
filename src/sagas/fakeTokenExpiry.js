import { getContext, call, takeLatest } from 'redux-saga/effects';

import { FAKE_TOKEN_EXPIRY_REQUEST } from '../actionTypes';

function* fakeTokenExpirySaga(action) {
  const api = yield getContext('api');
  yield call(api.fakeTokenExpiry, action.payload.tokenExpired);
}

export function* fakeTokenExpiry() {
  yield takeLatest(FAKE_TOKEN_EXPIRY_REQUEST, fakeTokenExpirySaga);
}
