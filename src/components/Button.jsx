import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';

class Button extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-button';
  }
};

Button.propTypes = {
  modifier: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  ripple: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

export default Button;
