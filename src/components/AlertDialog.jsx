import BaseDialog from './BaseDialog.jsx';
import React from 'react';

/**
 * @original ons-alert-dialog
 * @category dialog
 * @description
 * [en] Alert dialog that is displayed on top of the current screen. [/en]
 * [jp] どうしよう[/jp]
 * @example
   <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
     <div className="alert-dialog-title">Warning!</div>
     <div className="alert-dialog-content">
       An error has occurred!
     </div>
     <div className="alert-dialog-footer">
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Cancel
       </Button>
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Ok
       </Button>
     </div>
   </AlertDialog>
 */
class AlertDialog extends BaseDialog {
  _getDomNodeName() {
    return 'ons-alert-dialog';
  }
}

AlertDialog.propTypes = {
  onCancel: React.PropTypes.func,
  isOpen: React.PropTypes.bool.isRequired,
  isCancelable: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool,
  animation: React.PropTypes.string,
  modifier: React.PropTypes.string,
  maskColor: React.PropTypes.string,
  animationOptions: React.PropTypes.object
};

export default AlertDialog;
