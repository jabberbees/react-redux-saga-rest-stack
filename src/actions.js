import {
  SIGN_OUT_REQUEST,
  SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE,
  FAKE_TOKEN_EXPIRY_REQUEST,
  FAKE_ERROR,
  DO_SOMETHING_REQUEST, DO_SOMETHING_SUCCESS, DO_SOMETHING_FAILURE,
  DO_SOMETHING_WITH_PROMISE_REQUEST, DO_SOMETHING_WITH_PROMISE_SUCCESS, DO_SOMETHING_WITH_PROMISE_FAILURE
} from './actionTypes';

export const signOut = () => ({
  type: SIGN_OUT_REQUEST
});

export const signIn = (login, password) => ({
  type: SIGN_IN_REQUEST,
  payload: { login, password }
});

export const signInSuccess = () => ({
  type: SIGN_IN_SUCCESS
});

export const signInFailure = (message) => ({
  type: SIGN_IN_FAILURE,
  payload: message
});

export const fakeTokenExpiry = (tokenExpired) => ({
  type: FAKE_TOKEN_EXPIRY_REQUEST,
  payload: { tokenExpired }
});

export const fakeError = (error) => ({
  type: FAKE_ERROR,
  payload: { error }
});

export const doSomething = () => ({
  type: DO_SOMETHING_REQUEST
});

export const doSomethingSuccess = () => ({
  type: DO_SOMETHING_SUCCESS
});

export const doSomethingFailure = (message) => ({
  type: DO_SOMETHING_FAILURE,
  payload: message
});

export const doSomethingWithPromise = () => ({
  type: DO_SOMETHING_WITH_PROMISE_REQUEST,
  meta: { thunk: true }
});

export const doSomethingWithPromiseSuccess = () => ({
  type: DO_SOMETHING_WITH_PROMISE_SUCCESS
});

export const doSomethingWithPromiseFailure = (message) => ({
  type: DO_SOMETHING_WITH_PROMISE_FAILURE,
  payload: message
});
