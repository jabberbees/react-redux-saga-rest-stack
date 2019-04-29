import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { middleware as thunk } from 'redux-saga-thunk';

import reducer from './reducer';

import { initSagas } from './sagas';

import Api from './Api';

const saga = createSagaMiddleware({
    context: {
        api: Api
    }
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk, saga] :
  [thunk, saga];
  
export default function configureStore(initialState) {
    let store = createStore(reducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    initSagas(saga);
    return store;
};
