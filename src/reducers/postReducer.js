/* eslint-disable */
import {
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE, CREATE_POST_BEGIN, CREATE_POST_FAILURE,
} from '../actions/postAction';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.products,
      };

    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    case CREATE_POST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case CREATE_POST_SUCCESS:
      console.log('*****************');
      console.log('action.payload');
      console.log(action.payload)

      console.log(state.items);
      const updatedItems = state.items.push(action.payload);
      console.log(state.items);
      console.log({
        ...state,
        loading: false,
        error: false
      });
      console.log({
        ...state,
        loading: false,
        error: false,
        items: updatedItems,
      });
      console.log('*****************');
      return {
        ...state,
        loading: false,
      };

    case CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case DELETE_POST_SUCCESS:
      const filteredItems = state.items.filter(post => {
        return post.id !== action.payload.id;
      });

      return {
        ...state,
        loading: false,
        error: false,
        items: filteredItems,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
