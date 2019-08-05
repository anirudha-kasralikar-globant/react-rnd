// @flow

import { connect } from 'react-redux';
import { postOperations } from '../../state/ducks/post';
import NewPost from '../components/NewPost';

const mapDispatchToProps = dispatch => ({
  onAddPost: post => {
    dispatch(postOperations.createPost(post));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewPost);
