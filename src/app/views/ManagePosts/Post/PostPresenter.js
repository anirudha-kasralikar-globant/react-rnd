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

function PostPresenter(props) {
  const { post, onDelete } = props;
  const { title, body, id } = post;

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

PostPresenter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostPresenter;
