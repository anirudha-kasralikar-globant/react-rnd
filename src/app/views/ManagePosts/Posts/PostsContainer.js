// @flow
import { connect } from 'react-redux';
import PostsPresenter from './PostsPresenter';
import { postOperations } from '../../../state/ducks/post';

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch(postOperations.deletePost(id));
  },

  onComponentLoad: () => {
    return dispatch(postOperations.fetchAllPosts());
  },
});

const mapStateToProps = state => {
  const { posts, loading, error } = state.post;
  return {
    posts,
    loading,
    error,
  };
};

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsPresenter);

PostsContainer.displayName = 'PostsContainer';

export default PostsContainer;
