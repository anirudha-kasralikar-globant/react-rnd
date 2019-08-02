// index.js

import { combineReducers } from 'redux';
import postReducer from './postReducer';
import helloReducer from './helloReducer';
import articleReducer from './articleReducer';

export default combineReducers({
  post: postReducer,
  hello: helloReducer,
  article: articleReducer,
});
