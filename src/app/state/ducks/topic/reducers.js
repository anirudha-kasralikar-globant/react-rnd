// @flow
import { createReducer } from '../../utils';
import * as types from './types';

const initialState = {
  topics: [],
  loading: false,
  error: false,
  title: '',
  body: '',
};

const topicReducer = createReducer(initialState)({
  [types.BEGIN_TOPIC_TITLE_CHANGE]: (state, action) => {
    return {
      ...state,
      title: action.payload.title,
    };
  },
  [types.BEGIN_TOPIC_BODY_CHANGE]: (state, action) => {
    return {
      ...state,
      body: action.payload.body,
    };
  },
  [types.FETCH_TOPICS_BEGIN]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [types.FETCH_TOPICS_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      topics: action.payload.topics,
    };
  },
  [types.FETCH_TOPICS_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      topics: [],
    };
  },
  [types.CREATE_TOPIC_BEGIN]: (state, action) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  },
  [types.CREATE_TOPIC_SUCCESS]: (state, action) => {
    state.topics.push(action.payload.data);
    return {
      ...state,
      loading: false,
    };
  },
  [types.CREATE_TOPIC_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  },
  [types.DELETE_TOPIC_SUCCESS]: (state, action) => {
    const filtered = state.topics.filter(topic => {
      return topic.id !== action.payload.id;
    });

    return {
      ...state,
      loading: false,
      error: false,
      topics: filtered,
    };
  },
});

export default topicReducer;
