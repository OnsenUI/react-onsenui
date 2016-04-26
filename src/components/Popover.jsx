import BaseDialog from './BaseDialog.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @original ons-popover
 * @category popover
 * @description
 *   [en]
 *     A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
 *    Another common way to use the popover is to display a menu when a button on the screen is tapped.
 *   [/en]
 * [jp][/jp]
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

class Popover extends BaseDialog {
  _getDomNodeName() {
    return 'ons-popover';
  }

  show() {
    var target = this.props.getTarget();
    target = ReactDOM.findDOMNode(target);
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
  animationOptions: React.PropTypes.object,
  onPreShow: React.PropTypes.func,
  onPostShow: React.PropTypes.func,
  onPreHide: React.PropTypes.func,
  onPostHide: React.PropTypes.func

};

export default Popover;
