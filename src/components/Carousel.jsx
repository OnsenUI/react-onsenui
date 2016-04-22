import SimpleWrapper from './SimpleWrapper.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends SimpleWrapper {
  constructor(props) {
    super(props);
    this.convert = this.convert.bind(this);
    this.sizeConverter = this.sizeConverter.bind(this);
  }

  convert(dict, name, additionalDict = {}) {
    const fun = additionalDict.fun ? additionalDict.fun : (x) => x;
    const newName = additionalDict.newName ? additionalDict.newName : name;

    var val = dict[name];
    if (val) {
      if (newName !== name) {
        delete dict[name];
      }
      dict[newName] = fun(val);
    }
    return dict;
  }

  sizeConverter(item) {
    if (typeof (item) === 'number') {
      return `${item}px`;
    } else {
      return item;
    }
  }

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
    // var {fullscreen, itemWidth, overscrollable, centered} = this.props;

    var {...others} = this.props;

    ['fullscreen', 'swipeable', 'disabled', 'centered', 'overscrollable', 'centered'].forEach((el) => {
      this.convert(others, el);
    });

    this.convert(others, 'itemWidth', {fun: this.sizeConverter, newName: 'item-width'});
    this.convert(others, 'itemHeight', {fun: this.sizeConverter, newName: 'item-height'});
    this.convert(others, 'autoScroll', {newName: 'auto-scroll'});
    this.convert(others, 'autoRefresh', {newName: 'auto-refresh'});
    this.convert(others, 'autoScrollRatio', {newName: 'auto-scroll-ratio'});
    this.convert(others, 'initialIndex', {newName: 'initial-index'});

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
  onOverscroll: React.PropTypes.func
  // TODO animation options
};

export default Carousel;
