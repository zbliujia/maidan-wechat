import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PayActionCreators from '../actions/Pay'
import * as BusyActionCreators from '../actions/Busy'
import PayButton from '../components/PayButtonComponent';

class Pay extends Component {
  render() {
    const {actions,money} = this.props;
    return <PayButton actions={actions} money={money} />;
  }
}

Pay.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  let value = parseFloat(state.Keyboard.join(''));
  const props = {money:value};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(Object.assign({},PayActionCreators,BusyActionCreators), dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Pay);
