// @flow
import { createReducer } from '../../utils';
import * as types from './types';

const initialState = {
  posts: [],
  loading: false,
  error: false,
  title: '',
  body: '',
};

const postReducer = createReducer(initialState)({
  [types.BEGIN_POST_TITLE_CHANGE]: (state, action) => {
    return {
      ...state,
      title: action.payload.title,
    };
  },
  [types.BEGIN_POST_BODY_CHANGE]: (state, action) => {
    return {
      ...state,
      body: action.payload.body,
    };
  },
  [types.FETCH_POSTS_BEGIN]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [types.FETCH_POSTS_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      posts: action.payload.posts,
    };
  },
  [types.FETCH_POSTS_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      posts: [],
    };
  },
  [types.CREATE_POST_BEGIN]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [types.CREATE_POST_SUCCESS]: (state, action) => {
    state.posts.push(action.payload.data);
    return {
      ...state,
      loading: false,
    };
  },
  [types.CREATE_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  },
  [types.DELETE_POST_SUCCESS]: (state, action) => {
    const filtered = state.posts.filter(post => {
      return post.id !== action.payload.id;
    });

    return {
      ...state,
      loading: false,
      error: false,
      posts: filtered,
    };
  },
});

export default postReducer;
