// @flow
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import * as reducers from './ducks';
import rootSaga from './ducks/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [ReduxThunk.withExtraArgument(axios), sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    duration: true,
    timestamp: true,
    collapsed: true,
  });

  middleWares.push(logger);
}
const rootReducer = combineReducers(reducers);
const enhancerStoreCreator = composeWithDevTools(applyMiddleware(...middleWares));
const store = createStore(rootReducer, enhancerStoreCreator);

sagaMiddleware.run(rootSaga);

export default store;
