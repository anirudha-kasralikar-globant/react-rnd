/* eslint-disable */

export const SET_ARTICLE_DETAILS = 'SET_ARTICLE_DETAILS';

// eslint-disable-next-line
export default function(state = {}, action) {
  switch (action.type) {
    case SET_ARTICLE_DETAILS:
      return { data: action.payload };
    default:
      return state;
  }
}
