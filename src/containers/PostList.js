// flow
/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import { deletePost, fetchAllPosts } from '../actions/postAction';

class PostList extends Component {
  componentDidMount() {
    this.props.onComponentLoad;
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
  error: state.post.error
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(deletePost(id));
  },

  onComponentLoad: dispatch(fetchAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
