import { getContext, takeLatest } from 'redux-saga/effects';

import { DO_SOMETHING_WITH_PROMISE_REQUEST } from '../actionTypes';

import {
  doSomethingWithPromiseSuccess, doSomethingWithPromiseFailure
} from '../actions';

import { putThunk, putThunkError, callApi, errorMessage } from './helpers';

function* doSomethingWithPromiseSaga({ meta }) {
  try {
    const api = yield getContext('api');
    yield* callApi(api.doSomethingWithPromise);
    yield putThunk(doSomethingWithPromiseSuccess(), meta);
  }
  catch (error) {
    yield putThunkError(doSomethingWithPromiseFailure(errorMessage(error)), meta);
  }
}

export function* doSomethingWithPromise() {
  yield takeLatest(DO_SOMETHING_WITH_PROMISE_REQUEST, doSomethingWithPromiseSaga);
}
