// @flow

import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import { deleteTopic, fetchAllTopics } from './api';

export function* workerFetchTopics(action) {
  yield put({ type: types.FETCH_TOPICS_BEGIN });
  const { json, error } = yield call(fetchAllTopics);
  if (json) {
    yield put({ type: types.FETCH_TOPICS_SUCCESS, payload: { topics: json } });
  } else {
    yield put({ type: types.FETCH_TOPICS_FAILURE, payload: { error: error } });
  }
}

// export function* workerCreateTopic(action) {
//   // dispatch(createTopicBegin());
//   // axios
//   //   .topic(createTopicEndpointRoute(), { title, body })
//   //   .then(response => {
//   //     dispatch(createTopicSuccess(response.data));
//   //   })
//   //   .catch(error => {
//   //     dispatch(createTopicFailure());
//   //     throw error;
//   //   });
// }

//
export function* workerDeleteTopic(action) {
  yield put({ type: types.DELETE_TOPIC_BEGIN });
  const { response, error } = yield deleteTopic();
  // dispatch(deleteTopicBegin());
}

export default function* sagas() {
  yield all([
    // yield takeLatest(types.CREATE_TOPIC, workerCreateTopic),
    yield takeLatest(types.DELETE_TOPIC, workerDeleteTopic),
    yield takeLatest(types.FETCH_TOPICS, workerFetchTopics),
  ]);
}

console.log('topic sagas');
