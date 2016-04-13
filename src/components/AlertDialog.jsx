import BaseDialog from './BaseDialog.jsx';
import React from 'react';

class AlertDialog extends BaseDialog {
  _getDomNodeName() {
    return 'ons-alert-dialog';
  }
}

AlertDialog.propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  isOpen: React.PropTypes.bool.isRequired
};

export default AlertDialog;
