import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import KeyboardButton from '../components/KeyboardButtonComponent';
import { clickKeyboard } from '../actions';

class Keyboard extends Component {
  render() {
    const { dispatch } = this.props;
    return <KeyboardButton text='1' click={(text) => dispatch(clickKeyboard(text))}/>;
  }
}

function mapStateToProps(/*state*/) {
  const props = {};
  return props;
}

export default connect(mapStateToProps)(Keyboard);
