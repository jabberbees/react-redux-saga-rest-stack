import { getContext, put, takeLatest } from 'redux-saga/effects';

import { DO_SOMETHING_REQUEST } from '../actionTypes';

import {
  doSomethingSuccess, doSomethingFailure
} from '../actions';

import { callApi, errorMessage } from './helpers';

function* doSomethingSaga(action) {
  try {
    const api = yield getContext('api');
    yield* callApi(api.doSomething);
    yield put(doSomethingSuccess());
  }
  catch (error) {
    yield put(doSomethingFailure(errorMessage(error)));
  }
}

export function* doSomething() {
  yield takeLatest(DO_SOMETHING_REQUEST, doSomethingSaga);
}
