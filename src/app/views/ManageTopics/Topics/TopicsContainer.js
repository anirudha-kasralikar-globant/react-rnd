// @flow
import { connect } from 'react-redux';
import TopicsPresenter from './TopicsPresenter';
import { topicOperations } from '../../../state/ducks/topic';

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(topicOperations.deleteTopic(id));
  },

  onComponentLoad: () => {
    return dispatch(topicOperations.fetchTopics());
  },
});

const mapStateToProps = state => {
  const { topics, loading, error } = state.topic;
  return {
    topics,
    loading,
    error,
  };
};

const TopicsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopicsPresenter);

TopicsContainer.displayName = 'TopicsContainer';

export default TopicsContainer;
