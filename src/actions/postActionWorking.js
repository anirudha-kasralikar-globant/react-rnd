// @flow

import axios from 'axios';

export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

const apiUrl = 'http://localhost:3000/posts';

export const createPostSuccess = (data: Object) => ({
  type: ADD_POST,
  payload: {
    id: data.id,
    title: data.title,
    body: data.body,
  },
});

export const createPost = ({ title, body }: Object) => (dispatch: Function) => {
  axios
    .post(`${apiUrl}`, { title, body })
    .then(response => {
      dispatch(createPostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const deletePostSuccess = (id: number) => ({
  type: DELETE_POST,
  payload: {
    id,
  },
});

export const deletePost = (id: number) => (dispatch: Function) => {
  axios
    .get(`${apiUrl}/delete/${id}`)
    .then(response => {
      dispatch(deletePostSuccess(response.data));
    })
    .catch(error => {
      throw error;
    });
};

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN,
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchProducts = () => dispatch => {
  dispatch(fetchProductsBegin());
  return fetch(apiUrl)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchProductsSuccess(json));
      return json.products;
    })
    .catch(error => dispatch(fetchProductsFailure(error)));
};

export const fetchPosts = posts => ({
  type: FETCH_POST,
  posts,
});

export const fetchAllPosts = () => (dispatch: Function) => {
  axios
    .get(apiUrl)
    .then(response => {
      dispatch(fetchPosts(response.data));
    })
    .catch(error => {
      throw error;
    });
};
