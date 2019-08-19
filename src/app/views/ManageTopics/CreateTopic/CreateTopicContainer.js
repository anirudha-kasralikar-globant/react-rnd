// @flow
import { connect } from 'react-redux';

import CreateTopicPresenter from './CreateTopicPresenter';
import { topicOperations } from '../../../state/ducks/topic';

const mapDispatchToProps = dispatch => ({
  onAddTopic: topic => {
    dispatch(topicOperations.createTopic(topic));
  },
});

const mapStateToProps = state => {
  // const { body, title } = state.topic;
  // return {
  //   body,
  //   title,
  // };

  return {};
};

const CreateTopicContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTopicPresenter);

CreateTopicContainer.displayName = 'CreateTopicContainer';

export default CreateTopicContainer;
