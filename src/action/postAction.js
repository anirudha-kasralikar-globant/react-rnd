/* eslint-disable */

import axios from 'axios';

export const CREATE_POST_BEGIN = 'CREATE_POST_BEGIN';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const DELETE_POST_BEGIN = 'DELETE_POST_BEGIN';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';
export const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

const apiUrl = 'http://localhost:3000/posts';

export const createPostBegin = () => ({
  type: CREATE_POST_BEGIN,
});

export const createPostSuccess = (data: Object) => ({
  type: CREATE_POST_SUCCESS,
  payload: {
    id: data.id,
    title: data.title,
    body: data.body,
  },
});

export const createPostFailure = () => ({
  type: CREATE_POST_FAILURE,
});

export const createPost = ({ title, body }: Object) => (dispatch: Function) => {
  dispatch(createPostBegin());
  axios
    .post(`${apiUrl}`, { title, body })
    .then(response => {
      dispatch(createPostSuccess(response.data));
    })
    .catch(error => {
      dispatch(createPostFailure());
      throw error;
    });
};

export const deletePostBegin = () => ({
  type: DELETE_POST_BEGIN,
});

export const deletePostSuccess = (id: number) => ({
  type: DELETE_POST_SUCCESS,
  payload: {
    id,
  },
});

export const deletePostFailure = () => ({
  type: DELETE_POST_FAILURE,
});

export const deletePost = (id: number) => (dispatch: Function) => {
  dispatch(deletePostBegin());
  axios
    .delete(`${apiUrl}/${id}`)
    .then(response => {
      console.log(response.data);
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      dispatch(deletePostFailure());
      throw error;
    });
};

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = products => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { products },
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchAllPosts = () => dispatch => {
  dispatch(fetchPostsBegin());
  return fetch(apiUrl)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchPostsSuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchPostsFailure(error)));
};
