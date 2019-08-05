// @flow
/* eslint-disable*/

import React, { Component } from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px',
};

export default class Post extends Component {
  render() {
    const { post, onDelete } = this.props;
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
}
