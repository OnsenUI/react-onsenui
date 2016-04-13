import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class SimpleWrapper extends BasicComponent {
  render() {
    var {disabled, ...others} = this.props;

    if (disabled) {
      others.disabled = 'disabled';
    }

    return React.createElement(this._getDomNodeName(), others, this.props.children);
  }
};

export default SimpleWrapper;
