// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Topic from '../Topic';

class TopicsPresenter extends Component {
  componentDidMount() {
    const { onComponentLoad } = this.props;
    // eslint-disable-next-line flowtype/no-unused-expressions
    onComponentLoad();
  }

  render() {
    console.log('render called');
    const { error, loading, topics, onDelete } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!topics || !topics.length) {
      return <div>No Topics</div>;
    }

    return (
      <div>
        {topics.map(topic => (
          <Topic topic={topic} onDelete={onDelete} key={topic.id} />
        ))}
      </div>
    );
  }
}

TopicsPresenter.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  topics: PropTypes.array,
  onDelete: PropTypes.func,
  onComponentLoad: PropTypes.func,
};

TopicsPresenter.defaultProps = {
  error: false,
  loading: false,
  topics: [],
  onDelete: () => {},
  onComponentLoad: () => {},
};

export default TopicsPresenter;
