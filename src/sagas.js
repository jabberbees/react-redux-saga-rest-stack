import * as sagas from './sagas/index';

export function initSagas(sagaMiddleware) {
  Object.values(sagas).forEach(saga => {
    sagaMiddleware.run(saga);
  });
}
