import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import KeyboardButton from '../components/KeyboardButtonComponent';
import { clickKeyboard } from '../actions';

class Keyboard extends Component {
  render() {
    const { dispatch } = this.props;
    let keys = ['1','2','3','4','5','6','7','8','9','0','.','del'];
    return (
      <div>
        {
          keys.map(function(title) {
            return <KeyboardButton text={title} click={(text) => dispatch(clickKeyboard(text))}/>;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(/*state*/) {
  const props = {};
  return props;
}

export default connect(mapStateToProps)(Keyboard);
