import React from 'react';
import ReactDOM from 'react-dom';
import Util from './Util.js';

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

    this.node.addEventListener('cancel', this.props.onCancel);
    this.node.addEventListener('preshow', this.props.onPreShow);
    this.node.addEventListener('postshow', this.props.onPostShow);
    this.node.addEventListener('prehide', this.props.onPreHide);
    this.node.addEventListener('posthide', this.props.onPostHide);
    this.renderPortal(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOpen !== this.props.isOpen) {
      this.animateShow = true;
    }
    this.renderPortal(newProps);
  }

  componentWillUnmount() {
    this.node.removeEventListener('cancel', this.props.onCancel);
    this.node.removeEventListener('preshow', this.props.onPreShow);
    this.node.removeEventListener('postshow', this.props.onPostShow);
    this.node.removeEventListener('prehide', this.props.onPreHide);
    this.node.removeEventListener('posthide', this.props.onPostHide);

    ReactDOM.unmountComponentAtNode(this.node);
    document.body.removeChild(this.node);

    clearTimeout(this.timeout);
  }

  _update() {
    CustomElements.upgrade(this.node.firstChild);
    if (this.props.isOpen) {
      if (this.animateShow) {
        this.timeout = setTimeout(() => this.show(), 100);
      }
      this.animateShow = false;
    } else {
      this.timeout = setTimeout(() => this.hide(), 100);
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

    if (newProps.maskColor) {
      newProps = {...newProps, 'mask-color': newProps.maskColor};
    }

    if (newProps.animationOptions) {
      var val = Util.animationOptionsConverter(newProps.animationOptions);
      newProps = {...newProps, 'animation-options': val};
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
  isDisabled: React.PropTypes.bool,
  animation: React.PropTypes.string,
  maskColor: React.PropTypes.string,
  animationOptions: React.PropTypes.object,
  onPreShow: React.PropTypes.func,
  onPostShow: React.PropTypes.func,
  onPreHide: React.PropTypes.func,
  onPostHide: React.PropTypes.func
};

BaseDialog.defaultProps = {
  isCancelable: true,
  isDisabled: false
};

export default BaseDialog;
