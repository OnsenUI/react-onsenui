import BaseDialog from './BaseDialog.jsx';
import React from 'react';

class Dialog extends BaseDialog {
  _getDomNodeName() {
    return 'ons-dialog';
  }
}

Dialog.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool.isRequired
};

export default Dialog;
