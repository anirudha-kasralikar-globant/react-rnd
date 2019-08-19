// @flow
import { createAction } from 'redux-actions';
import helloEndpointRoute from './routes';
import * as types from './types';

export const sayHello = createAction(types.SAY_HELLO);
export const sayHelloAsyncRequest = createAction(types.SAY_HELLO_ASYNC_REQUEST);
export const sayHelloAsyncSuccess = createAction(types.SAY_HELLO_ASYNC_SUCCESS);
export const sayHelloAsyncFailure = createAction(types.SAY_HELLO_ASYNC_FAILURE);
export const sayHelloAsync = num => dispatch => {
  dispatch(sayHelloAsyncRequest());
  return fetch(helloEndpointRoute(num), { method: 'GET' })
    .then(res => {
      const resJson = res.json();
      if (!res.ok) throw Error(res.statusText);
      return resJson;
    })
    .then(data => {
      if (!data.serverMessage) throw Error('No message received');
      dispatch(sayHelloAsyncSuccess(data.serverMessage));
    })
    .catch(e => {
      dispatch(sayHelloAsyncFailure());
    });
};
