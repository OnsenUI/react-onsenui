import React from 'react';
import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';
import Util from './Util.js';

class SplitterSide extends BasicComponent {
  render() {
    var {...props} = this.props;

    props.collapse = this.props.isCollapsed ? 'collapse' : 'false';
    props.swipeable = this.props.isSwipeable ? 'swipeable' : 'false';

    Util.convert(props, 'width', {fun: Util.sizeConverter});
    Util.convert(props, 'animation');
    Util.convert(props, 'side');
    Util.convert(props, 'mode');
    Util.convert(props, 'animationOptions', {fun: Util.animationOptionsConverter, newName: 'animation-options'});
    Util.convert(props, 'openThreshold', {newName: 'open-threshold'});
    Util.convert(props, 'SwipeTargetWidth', {fun: Util.sizeConverter, newName: 'swipe-target-width'});

    return (
      <ons-splitter-side {...props} >
        {this.props.children}
      </ons-splitter-side>
    );
  }

  componentDidMount() {
    super.componentDidMount();
    this.node = ReactDOM.findDOMNode(this);

    this.node.addEventListener('postopen', this.props.onOpen);
    this.node.addEventListener('postclose', this.props.onClose);
    this.node.addEventListener('preopen', this.props.onPreOpen);
    this.node.addEventListener('preclose', this.props.onPreClose);
    this.node.addEventListener('modechange', this.props.onModeChange);
  }

  componentWillUnmount() {
    this.node.removeEventListener('postopen', this.props.onOpen);
    this.node.removeEventListener('postclose', this.props.onClose);
    this.node.removeEventListener('preopen', this.props.onPreOpen);
    this.node.removeEventListener('preclose', this.props.onPreClose);
    this.node.removeEventListener('modechange', this.props.onModeChange);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isOpen) {
      this.node.open();
    } else {
      this.node.close();
    }
  }
}

SplitterSide.propTypes = {
  isCollapsed: React.PropTypes.bool.isRequired,
  isSwipable: React.PropTypes.bool,
  isOpen: React.PropTypes.bool,
  onOpen: React.PropTypes.func,
  onClose: React.PropTypes.func,
  // value out of left, right ...
  side: React.PropTypes.oneOf(['left', 'right']),
  width: React.PropTypes.number,
  animation: React.PropTypes.string,
  animationOptions: React.PropTypes.object,
  openThreshold: React.PropTypes.number,
  mode: React.PropTypes.oneOf(['collapse', 'split']),
  onPreOpen: React.PropTypes.func,
  onPreClose: React.PropTypes.func,
  onModeChange: React.PropTypes.func
};

export default SplitterSide;
