// @flow
import Immutable from 'immutable';
import { createReducer } from '../../utils';
import * as types from './types';

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
});

const byeReducer = createReducer(initialState)({
  [types.SAY_bye]: (state, action) => state.set('message', action.payload),
  [types.SAY_bye_ASYNC_REQUEST]: (state, action) => state.set('messageAsync', 'Loading...'),
  [types.SAY_bye_ASYNC_SUCCESS]: (state, action) => state.set('messageAsync', action.payload),
  [types.SAY_bye_ASYNC_FAILURE]: (state, action) =>
    state.set('messageAsync', 'No message received, please check your connection'),
});

export default byeReducer;
