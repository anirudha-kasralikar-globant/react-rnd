// @flow
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px',
};

function TopicPresenter(props) {
  const { topic, onDelete } = props;
  const { title, body, id } = topic;

  return (
    <div style={styles}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(id)}>
        Remove
      </button>
    </div>
  );
}

TopicPresenter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  topic: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TopicPresenter;
