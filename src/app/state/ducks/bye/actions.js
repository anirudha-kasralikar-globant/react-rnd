// @flow
import { createAction } from 'redux-actions';
import byeEndpointRoute from './routes';
import * as types from './types';

export const saybye = createAction(types.SAY_bye);
export const saybyeAsyncRequest = createAction(types.SAY_bye_ASYNC_REQUEST);
export const saybyeAsyncSuccess = createAction(types.SAY_bye_ASYNC_SUCCESS);
export const saybyeAsyncFailure = createAction(types.SAY_bye_ASYNC_FAILURE);

export const saybyeAsync = num => dispatch => {
  dispatch(saybyeAsyncRequest());
  return fetch(byeEndpointRoute(num), { method: 'GET' })
    .then(res => {
      const resJson = res.json();
      if (!res.ok) throw Error(res.statusText);
      return resJson;
    })
    .then(data => {
      if (!data.serverMessage) throw Error('No message received');
      dispatch(saybyeAsyncSuccess(data.serverMessage));
    })
    .catch(e => {
      dispatch(saybyeAsyncFailure());
    });
};
