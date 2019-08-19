// @flow
import { connect } from 'react-redux';

import { helloOperations } from '../../state/ducks/hello';
import Button from '../common/button';

const mapStateToProps = () => ({
  label: 'Say hello',
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => {
    dispatch(helloOperations.sayHello('Hello!'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);
