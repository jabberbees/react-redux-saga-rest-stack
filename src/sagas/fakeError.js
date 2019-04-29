import { getContext, call, takeLatest } from 'redux-saga/effects';

import { FAKE_ERROR } from '../actionTypes';

function* fakeErrorSaga(action) {
  const api = yield getContext('api');
  yield call(api.fakeError, action.payload.error);
}

export function* fakeError() {
  yield takeLatest(FAKE_ERROR, fakeErrorSaga);
}
