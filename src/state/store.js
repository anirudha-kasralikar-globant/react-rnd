// @flow

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import * as reducers from './ducks';

const middleWares = [ReduxThunk.withExtraArgument(axios)];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    duration: true,
    timestamp: true,
    collapsed: false,
  });

  middleWares.push(logger);
}
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
export default store;
