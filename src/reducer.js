import { combineReducers } from 'redux';
import {
  SIGN_OUT_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  DO_SOMETHING_REQUEST,
  DO_SOMETHING_SUCCESS,
  DO_SOMETHING_FAILURE
} from './actionTypes';

const authInitialState = {
  isAuthenticated: false,
  error: null
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case SIGN_OUT_REQUEST:
      return Object.assign({}, state, {
        isAuthenticated: false
      });
    case SIGN_IN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        error: null
      });
    case SIGN_IN_FAILURE:
      return Object.assign({}, state, {
        isAuthenticated: false,
        error: action.payload
      });
    default:
      return state;
  }
};

const apiInitialState = {
  working: false,
  successes: 0,
  failures: 0
};

const apiReducer = (state = apiInitialState, action) => {
  switch (action.type) {
    case DO_SOMETHING_REQUEST:
      return Object.assign({}, state, {
        working: true,
        error: null
      });
    case DO_SOMETHING_SUCCESS:
      return Object.assign({}, state, {
        working: false,
        error: null,
        successes: state.successes+1
      });
    case DO_SOMETHING_FAILURE:
      return Object.assign({}, state, {
        working: false,
        error: action.payload,
        failures: state.failures+1
      });
    default:
      return state;
  }
};

const reducer = combineReducers({
  auth: authReducer,
  api: apiReducer
});

export default reducer;
