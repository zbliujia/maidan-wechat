import React, {
  Component
} from 'react';

import { connect } from 'react-redux';
import InfoMoney from '../components/InfoMoneyComponent';

class Info extends Component {
  render() {
    //const { dispatch } = this.props;
    return <InfoMoney text={this.props.text}/>;
  }
}

Info.propTypes = {

};

function mapStateToProps(state) {
  const props = {
    text: state.Keyboard.join('')
  };
  return props;
}

export default connect(mapStateToProps)(Info);
