// @flow
import Immutable from 'immutable';
import { createReducer } from '../../utils';
import * as types from './types';

const initialState = Immutable.fromJS({
  items: [],
  loading: false,
  error: null,
});

const postReducer = createReducer(initialState)({
  [types.FETCH_POSTS_BEGIN]: (state, action) => {
    console.log(types.FETCH_POSTS_BEGIN);
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
      items: action.payload.posts,
    };
  },
  [types.FETCH_POSTS_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: [],
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
    state.items.push(action.payload.data);
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
    const filteredItems = state.items.filter(post => {
      return post.id !== action.payload.id;
    });

    return {
      ...state,
      loading: false,
      error: false,
      items: filteredItems,
    };
  },
});

export default postReducer;
