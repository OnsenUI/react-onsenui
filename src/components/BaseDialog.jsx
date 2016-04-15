import React from 'react';
import ReactDOM from 'react-dom';

class BaseDialog extends React.Component {
  show() {
    this.node.firstChild.show();
  }

  updateClasses() {
    var node = this.node.firstChild;

    if (this.props.className) {
      if (this.lastClass) {
        node.className = node.className.replace(this.lastClass, '');
      }

      this.lastClass = ' ' + this.props.className;
      node.className += this.lastClass;
    }
  }

  hide() {
    this.node.firstChild.hide();
  }

  componentDidMount() {
    this.node = document.createElement('div');
    document.body.appendChild(this.node);

    this.node.addEventListener('cancel', () => {
      this.props.onCancel();
    });
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOpen !== this.props.isOpen) {
      this.animateShow = true;
    }
    this.renderPortal(newProps);
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);
  }

  _update() {
    CustomElements.upgrade(this.node.firstChild);
    if (this.props.isOpen) {
      if (this.animateShow) {
        this.show();
      }
      this.animateShow = false;
    } else {
      this.hide();
    }
    this.updateClasses();
  }

  _getDomNodeName() {
    throw new Error('_getDomNodeName is not implemented');
  }

  renderPortal(props) {
    var newProps = props || {};
    if (newProps.isCancelable) {
      newProps = {...newProps, cancelable: true};
    }

    if (newProps.isDisabled) {
      newProps = {...newProps, disabled: true};
    }

    var element = React.createElement(this._getDomNodeName(), newProps);
    ReactDOM.render(element, this.node, this._update.bind(this));
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return React.DOM.noscript();
  }
}

BaseDialog.propTypes = {
  onCancel: React.PropTypes.func,
  isOpen: React.PropTypes.bool.isRequired,
  isCancelable: React.PropTypes.bool,
  isDisabled: React.PropTypes.bool
};

BaseDialog.defaultProps = {
  isCancelable: true,
  isDisabled: false
};

export default BaseDialog;
