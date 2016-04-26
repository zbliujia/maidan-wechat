import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PayActionCreators from '../actions/Pay'
import PayButton from '../components/PayButtonComponent';

class Pay extends Component {
  render() {
    const {actions,active} = this.props;
    return <PayButton actions={actions} active={active} />;
  }
}

Pay.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let value = parseFloat(state.Keyboard.join(''));
  const props = {active:value > 0};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(PayActionCreators, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
