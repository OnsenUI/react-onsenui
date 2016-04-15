import BaseDialog from './BaseDialog.jsx';
import React from 'react';

class Dialog extends BaseDialog {
  _getDomNodeName() {
    return 'ons-dialog';
  }
}

Dialog.propTypes = {
  onCancel: React.PropTypes.func,
  isOpen: React.PropTypes.bool.isRequired,
  isCancelable: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool
};

export default Dialog;
