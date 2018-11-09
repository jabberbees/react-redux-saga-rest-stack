import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

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
  [require('redux-immutable-state-invariant').default(), saga] :
  [saga];
  
export default function configureStore(initialState) {
    let store = createStore(reducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    initSagas(saga);
    return store;
};
