// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from '../Post';

class PostsPresenter extends Component {
  componentDidMount() {
    const { onComponentLoad } = this.props;
    // eslint-disable-next-line flowtype/no-unused-expressions
    onComponentLoad();

    this.posts = React.createRef();
    console.log(this.posts);
  }

  render() {
    console.log('render called');
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

PostsPresenter.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array,
  onDelete: PropTypes.func,
  onComponentLoad: PropTypes.func,
};

PostsPresenter.defaultProps = {
  error: false,
  loading: false,
  posts: [],
  onDelete: () => {},
  onComponentLoad: () => {},
};

export default PostsPresenter;
