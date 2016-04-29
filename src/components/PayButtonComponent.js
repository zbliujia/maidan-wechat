'use strict';

import React from 'react';
import classnames from 'classnames';
require('styles/PayButton.css');

class PayButtonComponent extends React.Component {

  render() {
    let classes = classnames('paybutton-component', {'paybutton-active': this.props.money > 0}, {'paybutton-inactive': !(this.props.money > 0)});
    return (
      <button className={classes} onClick={() => this.handleClick()}>
        确认支付
      </button>
    );
  }

  handleClick() {
    if(this.props.money > 0) {
      this.props.actions.busy(true);
      this.props.actions.fetchPayIfNeeded(this.props.money);
    }
  }
}

// Uncomment properties you need
// PayButtonComponent.propTypes = {};
// PayButtonComponent.defaultProps = {};

export default PayButtonComponent;
