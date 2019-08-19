// @flow
import { connect } from 'react-redux';

import CreatePostPresenter from './CreatePostPresenter';
import { postOperations } from '../../../state/ducks/post';

const mapDispatchToProps = dispatch => ({
  onAddPost: post => {
    dispatch(postOperations.createPost(post));
  },
});

const mapStateToProps = state => {
  // const { body, title } = state.post;
  // return {
  //   body,
  //   title,
  // };

  return {};
};

const CreatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreatePostPresenter);

CreatePostContainer.displayName = 'CreatePostContainer';

export default CreatePostContainer;
