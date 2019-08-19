// @flow
import { createAction } from 'redux-actions';
import * as types from './types';
import { handleErrors } from '../../utils';
import { createPostEndpointRoute, deletePostEndpointRoute, fetchPostsEndpointRoute } from './routes';

export const beginPostTitleChange = createAction(types.BEGIN_POST_TITLE_CHANGE, title => ({ title }));
export const beginPostBodyChange = createAction(types.BEGIN_POST_BODY_CHANGE, body => ({ body }));

export const createPostBegin = createAction(types.CREATE_POST_BEGIN);
export const createPostSuccess = createAction(types.CREATE_POST_SUCCESS, data => ({ data }));
export const createPostFailure = createAction(types.CREATE_POST_FAILURE);

export const deletePostBegin = createAction(types.DELETE_POST_BEGIN);
export const deletePostSuccess = createAction(types.DELETE_POST_SUCCESS, id => ({ id }));
export const deletePostFailure = createAction(types.DELETE_POST_FAILURE);

export const fetchPostsBegin = createAction(types.FETCH_POSTS_BEGIN);
export const fetchPostsSuccess = createAction(types.FETCH_POSTS_SUCCESS, posts => ({ posts }));
export const fetchPostsFailure = createAction(types.FETCH_POSTS_FAILURE, error => error);

export const fetchAllPosts = () => (dispatch, getState, axios) => {
  dispatch(fetchPostsBegin());
  return fetch(fetchPostsEndpointRoute())
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchPostsSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchPostsFailure(error)));
};

export const deletePost = id => (dispatch, getState, axios) => {
  dispatch(deletePostBegin());
  axios
    .delete(deletePostEndpointRoute(id))
    .then(response => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      dispatch(deletePostFailure());
      throw error;
    });
};

export const createPost = ({ title, body }) => (dispatch, getState, axios) => {
  dispatch(createPostBegin());
  axios
    .post(createPostEndpointRoute(), { title, body })
    .then(response => {
      dispatch(createPostSuccess(response.data));
    })
    .catch(error => {
      dispatch(createPostFailure());
      throw error;
    });
};
