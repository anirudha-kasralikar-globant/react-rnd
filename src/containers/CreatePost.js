// @flow

import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => ({
  onAddPost: post => {
    dispatch(createPost(post));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewPost);
