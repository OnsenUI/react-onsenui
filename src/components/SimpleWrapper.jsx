import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class SimpleWrapper extends BasicComponent {
  render() {
    var {disabled, ripple, ...others} = this.props;

    if (disabled) {
      others.disabled = 'disabled';
    }

    if (ripple) {
      others.ripple = true;
    }

    return React.createElement(this._getDomNodeName(), others, this.props.children);
  }
};

export default SimpleWrapper;
