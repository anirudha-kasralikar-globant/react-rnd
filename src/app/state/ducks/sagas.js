// @flow
import { all, fork } from 'redux-saga/effects';
import { topicSagas } from './topic';

const sagasList = [topicSagas];

export default function* rootSaga() {
  // yield all([...topicSagas]);
  // yield all(sagasList.map(saga => ({ ...saga })));

  // yield all([fork(topicSagas)]);
  yield all(sagasList.map(saga => fork(saga)));
}
