// @flow

import { connect } from 'react-redux';
import { createPost } from '../action/postAction';
import NewPost from '../component/NewPost';

const mapDispatchToProps = dispatch => ({
  onAddPost: post => {
    dispatch(createPost(post));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewPost);
