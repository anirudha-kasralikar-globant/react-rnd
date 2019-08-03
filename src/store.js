// @flow

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import reducer from './reducers';

const middleWares = [ReduxThunk.withExtraArgument(axios)];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    duration: true,
    timestamp: true,
    collapsed: false,
  });

  middleWares.push(logger);
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWares)),
);
export default store;
