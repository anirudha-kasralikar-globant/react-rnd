// @flow
import { connect } from 'react-redux';

import HelloPresenter from './HelloPresenter';

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => {
  return {
    state: {},
  };
};

const HelloContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HelloPresenter);

export default HelloContainer;
