import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Util from './Util.js';

class Carousel extends SimpleWrapper {
  _getDomNodeName() {
    return 'ons-carousel';
  }

  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    CustomElements.upgrade(node);
    node.addEventListener('postchange', this.props.onPostChange);
    node.addEventListener('refresh', this.props.onRefresh);
    node.addEventListener('overscroll', this.props.onOverscroll);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('postchange', this.props.onPostChange);
    node.removeEventListener('refresh', this.props.onRefresh);
    node.removeEventListener('overscroll', this.props.onOverscroll);
  }

  render() {
    var {...others} = this.props;

    ['fullscreen', 'swipeable', 'disabled', 'centered', 'overscrollable', 'centered'].forEach((el) => {
      Util.convert(others, el);
    });

    Util.convert(others, 'itemWidth', {fun: Util.sizeConverter, newName: 'item-width'});
    Util.convert(others, 'itemHeight', {fun: Util.sizeConverter, newName: 'item-height'});
    Util.convert(others, 'autoScroll', {newName: 'auto-scroll'});
    Util.convert(others, 'autoRefresh', {newName: 'auto-refresh'});
    Util.convert(others, 'autoScrollRatio', {newName: 'auto-scroll-ratio'});
    Util.convert(others, 'initialIndex', {newName: 'initial-index'});
    Util.convert(others, 'animationOptions', {fun: Util.animationOptionsConverter, newName: 'animation-options'});

    return React.createElement(this._getDomNodeName(), others, this.props.children);
  }
};

Carousel.propTypes = {
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
  fullscreen: React.PropTypes.bool,
  overscrollable: React.PropTypes.bool,
  centered: React.PropTypes.bool,
  itemWidth: React.PropTypes.oneOf(React.PropTypes.string, React.PropTypes.string),
  itemHeight: React.PropTypes.oneOf(React.PropTypes.string, React.PropTypes.string),
  autoScroll: React.PropTypes.bool,
  autoScrollRatio: React.PropTypes.number,
  swipeable: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  initialIndex: React.PropTypes.number,
  autoRefresh: React.PropTypes.bool,
  onPostChange: React.PropTypes.func,
  onRefresh: React.PropTypes.func,
  onOverscroll: React.PropTypes.func,
  animationOptions: React.PropTypes.object
};

export default Carousel;
