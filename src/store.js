import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

export default store;
