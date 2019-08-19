// @flow
import { createAction } from 'redux-actions';
import * as types from './types';
import { createTopicEndpointRoute, deleteTopicEndpointRoute } from './routes';

export const beginTopicTitleChange = createAction(types.BEGIN_TOPIC_TITLE_CHANGE, title => ({ title }));
export const beginTopicBodyChange = createAction(types.BEGIN_TOPIC_BODY_CHANGE, body => ({ body }));

export const createTopicBegin = createAction(types.CREATE_TOPIC_BEGIN);
export const createTopicSuccess = createAction(types.CREATE_TOPIC_SUCCESS, data => ({ data }));
export const createTopicFailure = createAction(types.CREATE_TOPIC_FAILURE);

export const deleteTopicBegin = createAction(types.DELETE_TOPIC_BEGIN);
export const deleteTopicSuccess = createAction(types.DELETE_TOPIC_SUCCESS, id => ({ id }));
export const deleteTopicFailure = createAction(types.DELETE_TOPIC_FAILURE);

export const fetchTopics = createAction(types.FETCH_TOPICS);

export const deleteTopic = id => (dispatch, getState, axios) => {
  dispatch(deleteTopicBegin());
  axios
    .delete(deleteTopicEndpointRoute(id))
    .then(response => {
      dispatch(deleteTopicSuccess(id));
    })
    .catch(error => {
      dispatch(deleteTopicFailure());
      throw error;
    });
};

export const createtopic = ({ title, body }) => (dispatch, getState, axios) => {
  dispatch(createTopicBegin());
  axios
    .topic(createTopicEndpointRoute(), { title, body })
    .then(response => {
      dispatch(createTopicSuccess(response.data));
    })
    .catch(error => {
      dispatch(createTopicFailure());
      throw error;
    });
};
