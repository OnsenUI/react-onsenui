import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';
import React from 'react';

class PullHook extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    node.addEventListener('changestate', this.props.onChange);
    CustomElements.upgrade(this.refs.pullHook);
    this.refs.pullHook.setActionCallback(this.props.onLoad);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('changestate', this.props.onChange);
  }

  render() {
    var {disabled, thresholdHeight, fixedContent, height, ...others} = this.props;

    if (disabled) {
      others.disabled = true;
    }

    if (height) {
      others.height = `${height}px`;
    }

    if (thresholdHeight) {
      others['threshold-height'] = `${thresholdHeight}px`;
    }

    if (fixedContent) {
      others['fixed-content'] = true;
    }

    return <ons-pull-hook ref='pullHook' {...others} />;
  }
}

PullHook.propTypes = {
  onChange: React.PropTypes.func,
  onLoad: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  height: React.PropTypes.number,
  thresholdHeight: React.PropTypes.number,
  fixedContent: React.PropTypes.bool
};

export default PullHook;
