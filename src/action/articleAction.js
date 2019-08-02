/* eslint-disable */

import axios from 'axios';

export const SET_ARTICLE_DETAILS = 'SET_ARTICLE_DETAILS';

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data,
  };
}

export function fetchArticleDetails() {
  return function(dispatch) {
    return axios.get('https://api.myjson.com/bins/19dtxc').then(({ data }) => {
      dispatch(setArticleDetails(data));
    });
  };
}
