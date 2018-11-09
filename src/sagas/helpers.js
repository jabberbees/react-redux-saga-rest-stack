import { call, put } from 'redux-saga/effects';
import { signOut } from '../actions';

export function* callApi(fn, ...args) {
    try {
        yield call(fn, ...args);
    }
    catch (error) {
        if (error.status === 401) {
            yield put(signOut());
        }
        throw error;
    }
}

export function errorMessage(error) {
    switch (error.status) {
        case 500: return 'Internal Server Error';
        case 401: return 'Invalid credentials';
        default: return 'Something went wrong';
    }
}
