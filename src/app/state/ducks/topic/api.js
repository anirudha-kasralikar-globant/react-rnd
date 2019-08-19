// @flow
import axios from 'axios';
import { deleteTopicEndpointRoute, fetchTopicsEndpointRoute } from './routes';
import { handleErrors } from '../../utils';

export function fetchAllTopics() {
  return fetch(fetchTopicsEndpointRoute())
    .then(handleErrors)
    .then(res => res.json())
    .then(json => ({ json }))
    .catch(error => ({ error }));
}

export function deleteTopic(id) {
  axios
    .delete(deleteTopicEndpointRoute(id))
    .then(response => {
      // dispatch(deleteTopicSuccess(id));
    })
    .catch(error => {
      // dispatch(deleteTopicFailure());
      throw error;
    });
}
