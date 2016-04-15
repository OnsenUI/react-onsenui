import BaseDialog from './BaseDialog.jsx';
import React from 'react';

class Popover extends BaseDialog {
  _getDomNodeName() {
    return 'ons-popover';
  }

  show() {
    var target = this.props.getTarget();
    // target = ReactDOM.findDOMNode(target);
    return this.node.firstChild.show(target);
  }
}

Popover.propTypes = {
  onCancel: React.PropTypes.func,
  isOpen: React.PropTypes.bool.isRequired,
  getTarget: React.PropTypes.func.isRequired,
  isCancelable: React.PropTypes.bool,
  animation: React.PropTypes.string,
  maskColor: React.PropTypes.string,
  animationOptions: React.PropTypes.object
};

export default Popover;
