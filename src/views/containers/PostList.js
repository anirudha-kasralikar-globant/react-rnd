// flow
/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { postOperations } from '../../state/ducks/post';

class PostList extends Component {
  componentDidMount() {
    const { onComponentLoad } = this.props;
    onComponentLoad;
  }

  render() {
    const { error, loading, posts, onDelete } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!posts || !posts.length) {
      return <div>No Posts</div>;
    }

    return (
      <div>
        {posts.map(post => (
          <Post post={post} onDelete={onDelete} key={post.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.items,
  loading: state.post.loading,
  error: state.post.error,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(postOperations.deletePost(id));
  },

  onComponentLoad: dispatch(postOperations.fetchAllPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList);
