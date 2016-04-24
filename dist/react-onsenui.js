/*! react-onsenui v0.0.20 - Sun Apr 24 2016 20:38:58 GMT+0900 (JST) */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
  (factory((global.Ons = global.Ons || {}),global.React,global.ReactDOM));
}(this, function (exports,React,ReactDOM) { 'use strict';

  React = 'default' in React ? React['default'] : React;
  ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.objectWithoutProperties = function (obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;

  var BaseDialog = function (_React$Component) {
    babelHelpers.inherits(BaseDialog, _React$Component);

    function BaseDialog() {
      babelHelpers.classCallCheck(this, BaseDialog);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BaseDialog).apply(this, arguments));
    }

    babelHelpers.createClass(BaseDialog, [{
      key: 'show',
      value: function show() {
        this.node.firstChild.show();
      }
    }, {
      key: 'updateClasses',
      value: function updateClasses() {
        var node = this.node.firstChild;

        if (this.props.className) {
          if (this.lastClass) {
            node.className = node.className.replace(this.lastClass, '');
          }

          this.lastClass = ' ' + this.props.className;
          node.className += this.lastClass;
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        this.node.firstChild.hide();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.node = document.createElement('div');
        document.body.appendChild(this.node);

        this.node.addEventListener('cancel', this.props.onCancel);
        this.node.addEventListener('preshow', this.props.onPreShow);
        this.node.addEventListener('postshow', this.props.onPostShow);
        this.node.addEventListener('prehide', this.props.onPreHide);
        this.node.addEventListener('posthide', this.props.onPostHide);
        this.renderPortal(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (newProps.isOpen !== this.props.isOpen) {
          this.animateShow = true;
        }
        this.renderPortal(newProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.node.removeEventListener('cancel', this.props.onCancel);
        this.node.removeEventListener('preshow', this.props.onPreShow);
        this.node.removeEventListener('postshow', this.props.onPostShow);
        this.node.removeEventListener('prehide', this.props.onPreHide);
        this.node.removeEventListener('posthide', this.props.onPostHide);

        ReactDOM.unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
      }
    }, {
      key: '_update',
      value: function _update() {
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
    }, {
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        throw new Error('_getDomNodeName is not implemented');
      }
    }, {
      key: 'renderPortal',
      value: function renderPortal(props) {
        var newProps = props || {};
        if (newProps.isCancelable) {
          newProps = babelHelpers.extends({}, newProps, { cancelable: true });
        }

        if (newProps.isDisabled) {
          newProps = babelHelpers.extends({}, newProps, { disabled: true });
        }

        if (newProps.maskColor) {
          newProps = babelHelpers.extends({}, newProps, { 'mask-color': newProps.maskColor });
        }

        if (newProps.animationOptions) {
          var keys = Object.keys(newProps.animationOptions);
          var innerString = keys.map(function (key) {
            return key + ': "' + newProps.animationOptions[key] + '"';
          });
          var val = '{' + innerString.join(',') + '}';
          newProps = babelHelpers.extends({}, newProps, { 'animation-options': val });
        }

        var element = React.createElement(this._getDomNodeName(), newProps);
        ReactDOM.render(element, this.node, this._update.bind(this));
      }
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    }, {
      key: 'render',
      value: function render() {
        return React.DOM.noscript();
      }
    }]);
    return BaseDialog;
  }(React.Component);

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

  var AlertDialog = function (_BaseDialog) {
    babelHelpers.inherits(AlertDialog, _BaseDialog);

    function AlertDialog() {
      babelHelpers.classCallCheck(this, AlertDialog);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(AlertDialog).apply(this, arguments));
    }

    babelHelpers.createClass(AlertDialog, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-alert-dialog';
      }
    }]);
    return AlertDialog;
  }(BaseDialog);

  AlertDialog.propTypes = {
    onCancel: React.PropTypes.func,
    isOpen: React.PropTypes.bool.isRequired,
    isCancelable: React.PropTypes.bool,
    isDisabled: React.PropTypes.bool,
    animation: React.PropTypes.string,
    modifier: React.PropTypes.string,
    maskColor: React.PropTypes.string,
    animationOptions: React.PropTypes.object,
    onPreShow: React.PropTypes.func,
    onPostShow: React.PropTypes.func,
    onPreHide: React.PropTypes.func,
    onPostHide: React.PropTypes.func
  };

  var BasicComponent = function (_React$Component) {
    babelHelpers.inherits(BasicComponent, _React$Component);

    function BasicComponent(props) {
      babelHelpers.classCallCheck(this, BasicComponent);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BasicComponent).call(this, props));

      _this.updateClasses = _this.updateClasses.bind(_this);
      return _this;
    }

    babelHelpers.createClass(BasicComponent, [{
      key: 'updateClasses',
      value: function updateClasses() {
        var node = ReactDOM.findDOMNode(this);

        if (this.props.className) {
          if (this.lastClass) {
            node.className = node.className.replace(this.lastClass, '');
          }

          this.lastClass = ' ' + this.props.className;
          node.className += this.lastClass;
        }
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.updateClasses();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.updateClasses();
      }
    }]);
    return BasicComponent;
  }(React.Component);

  var SimpleWrapper = function (_BasicComponent) {
    babelHelpers.inherits(SimpleWrapper, _BasicComponent);

    function SimpleWrapper() {
      babelHelpers.classCallCheck(this, SimpleWrapper);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SimpleWrapper).apply(this, arguments));
    }

    babelHelpers.createClass(SimpleWrapper, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var disabled = _props.disabled;
        var ripple = _props.ripple;
        var others = babelHelpers.objectWithoutProperties(_props, ['disabled', 'ripple']);


        if (disabled) {
          others.disabled = 'disabled';
        }

        if (ripple) {
          others.ripple = true;
        }

        return React.createElement(this._getDomNodeName(), others, this.props.children);
      }
    }]);
    return SimpleWrapper;
  }(BasicComponent);

  ;

  /**
   * @original ons-back-button
   * @category page
   * @description
   * [en] Back button component for Toolbar. It enables to automatically to pop the top pae of the navigator. When only presented with one page, the button is hidden automatically.  [/en]
   * [jp] どうしよう[/jp]
   * @example
    <BackButton> Back </BackButton>
   */

  var BackButton = function (_SimpleWrapper) {
    babelHelpers.inherits(BackButton, _SimpleWrapper);

    function BackButton() {
      babelHelpers.classCallCheck(this, BackButton);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BackButton).apply(this, arguments));
    }

    babelHelpers.createClass(BackButton, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-back-button';
      }
    }]);
    return BackButton;
  }(SimpleWrapper);

  ;

  var BottomToolbar = function (_SimpleWrapper) {
    babelHelpers.inherits(BottomToolbar, _SimpleWrapper);

    function BottomToolbar() {
      babelHelpers.classCallCheck(this, BottomToolbar);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(BottomToolbar).apply(this, arguments));
    }

    babelHelpers.createClass(BottomToolbar, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-buttom-toolbar';
      }
    }]);
    return BottomToolbar;
  }(SimpleWrapper);

  ;

  BottomToolbar.propTypes = {
    modifier: React.PropTypes.string
  };

  var Button = function (_SimpleWrapper) {
    babelHelpers.inherits(Button, _SimpleWrapper);

    function Button() {
      babelHelpers.classCallCheck(this, Button);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
    }

    babelHelpers.createClass(Button, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-button';
      }
    }]);
    return Button;
  }(SimpleWrapper);

  ;

  Button.propTypes = {
    modifier: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    onClick: React.PropTypes.func
  };

  var Carousel = function (_SimpleWrapper) {
    babelHelpers.inherits(Carousel, _SimpleWrapper);

    function Carousel(props) {
      babelHelpers.classCallCheck(this, Carousel);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Carousel).call(this, props));

      _this.convert = _this.convert.bind(_this);
      _this.sizeConverter = _this.sizeConverter.bind(_this);
      return _this;
    }

    babelHelpers.createClass(Carousel, [{
      key: 'convert',
      value: function convert(dict, name) {
        var additionalDict = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        var fun = additionalDict.fun ? additionalDict.fun : function (x) {
          return x;
        };
        var newName = additionalDict.newName ? additionalDict.newName : name;

        var val = dict[name];
        if (val) {
          if (newName !== name) {
            delete dict[name];
          }
          dict[newName] = fun(val);
        }
        return dict;
      }
    }, {
      key: 'sizeConverter',
      value: function sizeConverter(item) {
        if (typeof item === 'number') {
          return item + 'px';
        } else {
          return item;
        }
      }
    }, {
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-carousel';
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(Carousel.prototype), 'componentDidMount', this).call(this);
        var node = ReactDOM.findDOMNode(this);
        CustomElements.upgrade(node);
        node.addEventListener('postchange', this.props.onPostChange);
        node.addEventListener('refresh', this.props.onRefresh);
        node.addEventListener('overscroll', this.props.onOverscroll);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var node = ReactDOM.findDOMNode(this);
        node.removeEventListener('postchange', this.props.onPostChange);
        node.removeEventListener('refresh', this.props.onRefresh);
        node.removeEventListener('overscroll', this.props.onOverscroll);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        // var {fullscreen, itemWidth, overscrollable, centered} = this.props;

        var others = babelHelpers.objectWithoutProperties(this.props, []);


        ['fullscreen', 'swipeable', 'disabled', 'centered', 'overscrollable', 'centered'].forEach(function (el) {
          _this2.convert(others, el);
        });

        this.convert(others, 'itemWidth', { fun: this.sizeConverter, newName: 'item-width' });
        this.convert(others, 'itemHeight', { fun: this.sizeConverter, newName: 'item-height' });
        this.convert(others, 'autoScroll', { newName: 'auto-scroll' });
        this.convert(others, 'autoRefresh', { newName: 'auto-refresh' });
        this.convert(others, 'autoScrollRatio', { newName: 'auto-scroll-ratio' });
        this.convert(others, 'initialIndex', { newName: 'initial-index' });

        return React.createElement(this._getDomNodeName(), others, this.props.children);
      }
    }]);
    return Carousel;
  }(SimpleWrapper);

  ;

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

  var CarouselItem = function (_SimpleWrapper) {
    babelHelpers.inherits(CarouselItem, _SimpleWrapper);

    function CarouselItem() {
      babelHelpers.classCallCheck(this, CarouselItem);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(CarouselItem).apply(this, arguments));
    }

    babelHelpers.createClass(CarouselItem, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-carousel-item';
      }
    }]);
    return CarouselItem;
  }(SimpleWrapper);

  ;

  CarouselItem.propTypes = {
    /**
     * @name modifier
     * @type string
     * @description
     *  [en]
     *  Specify modifier name to specify custom styles. Optional.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    modifier: React.PropTypes.string
  };

  var Dialog = function (_BaseDialog) {
    babelHelpers.inherits(Dialog, _BaseDialog);

    function Dialog() {
      babelHelpers.classCallCheck(this, Dialog);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
    }

    babelHelpers.createClass(Dialog, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-dialog';
      }
    }]);
    return Dialog;
  }(BaseDialog);

  Dialog.propTypes = {
    onCancel: React.PropTypes.func,
    isOpen: React.PropTypes.bool.isRequired,
    isCancelable: React.PropTypes.bool,
    isDisabled: React.PropTypes.bool,
    animation: React.PropTypes.string,
    modifier: React.PropTypes.string,
    maskColor: React.PropTypes.string,
    animationOptions: React.PropTypes.object,
    onPreShow: React.PropTypes.func,
    onPostShow: React.PropTypes.func,
    onPreHide: React.PropTypes.func,
    onPostHide: React.PropTypes.func
  };

  var Fab = function (_SimpleWrapper) {
    babelHelpers.inherits(Fab, _SimpleWrapper);

    function Fab() {
      babelHelpers.classCallCheck(this, Fab);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Fab).apply(this, arguments));
    }

    babelHelpers.createClass(Fab, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-fab';
      }
    }]);
    return Fab;
  }(SimpleWrapper);

  ;

  Fab.propTypes = {
    modifier: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    position: React.PropTypes.string,
    disabled: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  /**
   * @original ons-page
   * @category page
   * @description
   * [en] Displays an icon. [/en]
   * [jp] どうしよう[/jp]
   * @example
    <Icon
      size={{default: 32, material: 40}}
      icon={{default: 'ion-navicon', material: 'md-menu'}}
    />
  /> */

  var Icon = function (_SimpleWrapper) {
    babelHelpers.inherits(Icon, _SimpleWrapper);

    function Icon() {
      babelHelpers.classCallCheck(this, Icon);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
    }

    babelHelpers.createClass(Icon, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-icon';
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var icon = _props.icon;
        var size = _props.size;
        var spin = _props.spin;
        var fixedWidth = _props.fixedWidth;
        var others = babelHelpers.objectWithoutProperties(_props, ['icon', 'size', 'spin', 'fixedWidth']);


        if (fixedWidth) {
          others['fixed-width'] = true;
        }

        others['spin'] = spin ? true : null;

        if (icon) {
          if (typeof icon === 'string') {
            others.icon = icon;
          } else {
            var keys = Object.keys(icon).filter(function (a) {
              return a !== 'default';
            });
            var innerString = keys.map(function (key) {
              return key + ':' + icon[key] + '';
            });
            others.icon = icon.default + ', ' + innerString.join(',');
          }
        }

        if (size) {
          if (typeof size === 'number') {
            others.size = size + 'px';
          } else {
            var _keys = Object.keys(size).filter(function (a) {
              return a !== 'default';
            });
            var _innerString = _keys.map(function (key) {
              return key + ':' + size[key] + 'px';
            });
            others.size = size.default + 'px, ' + _innerString.join(',');
          }
        }
        return React.createElement(this._getDomNodeName(), others, this.props.children);
      }
    }]);
    return Icon;
  }(SimpleWrapper);

  ;

  Icon.propTypes = {
    modifier: React.PropTypes.string,
    icon: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.objectOf(React.PropTypes.string)]),
    size: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.objectOf(React.PropTypes.number)]),
    rotate: React.PropTypes.oneOf([0, 90, 180, 270]),
    fixedWidth: React.PropTypes.bool,
    spin: React.PropTypes.bool

  };

  var EVENT_TYPES = ['change', 'input'];

  var Input = function (_BasicComponent) {
    babelHelpers.inherits(Input, _BasicComponent);

    function Input() {
      babelHelpers.classCallCheck(this, Input);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
    }

    babelHelpers.createClass(Input, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        babelHelpers.get(Object.getPrototypeOf(Input.prototype), 'componentDidMount', this).call(this);
        var node = ReactDOM.findDOMNode(this);

        EVENT_TYPES.forEach(function (eventType) {
          node.addEventListener(eventType, _this2.props.onChange);
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var _this3 = this;

        var node = ReactDOM.findDOMNode(this);

        EVENT_TYPES.forEach(function (eventType) {
          node.removeEventListener(eventType, _this3.props.onChange);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var checked = _props.checked;
        var other = babelHelpers.objectWithoutProperties(_props, ['checked']);

        other['input-id'] = this.props.inputId;

        return React.createElement('ons-input', babelHelpers.extends({ checked: checked ? '' : null }, other));
      }
    }]);
    return Input;
  }(BasicComponent);

  Input.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    type: React.PropTypes.string,
    inputId: React.PropTypes.string,
    'float': React.PropTypes.bool
  };

  var LazyList = function (_BasicComponent) {
    babelHelpers.inherits(LazyList, _BasicComponent);
    babelHelpers.createClass(LazyList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(LazyList.prototype), 'componentDidMount', this).call(this);
        var self = this;
        CustomElements.upgrade(this.refs.lazyRepeat);

        this.refs.lazyRepeat.delegate = {
          calculateItemHeight: function calculateItemHeight(index) {
            return self.props.calculateItemHeight(index);
          },
          _render: function (items, newHeight) {
            var _this2 = this;

            var createElement = function createElement(_ref) {
              var index = _ref.index;
              var top = _ref.top;

              return self.props.renderRow(index);
            };

            var el = items.map(createElement);
            self.setState({ children: el, height: newHeight }, function () {
              var list = _this2.refs.list;
              // ignore i=0 <lazy repat
              for (var i = 1; i < list.children.length; i++) {
                list.children[i].style.position = 'absolute';
                list.children[i].style.top = items[i - 1].top + 'px';
                list.children[i].style.left = '0px';
                list.children[i].style.right = '0px';
              }
            });
          }.bind(this),
          countItems: function countItems() {
            return self.props.length;
          }
        };
      }
    }]);

    function LazyList(props) {
      babelHelpers.classCallCheck(this, LazyList);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(LazyList).call(this, props));

      _this.state = { children: [] };
      return _this;
    }

    babelHelpers.createClass(LazyList, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'ons-list',
          babelHelpers.extends({}, this.props, { ref: 'list',
            'class': 'list', style: { position: 'relative', height: this.state.height }
          }),
          React.createElement('ons-lazy-repeat', { ref: 'lazyRepeat' }),
          this.state.children
        );
      }
    }]);
    return LazyList;
  }(BasicComponent);

  LazyList.propTypes = {
    length: React.PropTypes.number.isRequired,
    renderRow: React.PropTypes.func.isRequired,
    calculateItemHeight: React.PropTypes.func.isRequired,
    modifier: React.PropTypes.string
  };

  var List = function (_BasicComponent) {
    babelHelpers.inherits(List, _BasicComponent);

    function List() {
      babelHelpers.classCallCheck(this, List);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
    }

    babelHelpers.createClass(List, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var pages = this.props.dataSource.map(function (data, idx) {
          return _this2.props.renderRow(data, idx);
        });

        return React.createElement(
          'ons-list',
          babelHelpers.extends({}, this.props, { ref: 'list' }),
          this.props.renderHeader(),
          pages,
          this.props.renderFooter()
        );
      }
    }]);
    return List;
  }(BasicComponent);

  List.propTypes = {
    modifier: React.PropTypes.string,
    dataSource: React.PropTypes.array.isRequired,
    renderHeader: React.PropTypes.func,
    renderFooter: React.PropTypes.func
  };

  List.defaultProps = {
    renderHeader: function renderHeader() {
      return null;
    },
    renderFooter: function renderFooter() {
      return null;
    }
  };

  /**
   * @original ons-list-header
   * @category list
   * @description
   * [en] Header element for list items. Must be put inside ons-list component.
   [/en]
   * [jp] どうしよう[/jp]
   * @example
     <List
       dataSource={this.state.data}
       renderHeader={() =>
          <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
      renderRow={(row, idx) => (
        <ListItem > {row} </ListItem>
      )}
    />
   */

  var ListHeader = function (_SimpleWrapper) {
    babelHelpers.inherits(ListHeader, _SimpleWrapper);

    function ListHeader() {
      babelHelpers.classCallCheck(this, ListHeader);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ListHeader).apply(this, arguments));
    }

    babelHelpers.createClass(ListHeader, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-list-header';
      }
    }]);
    return ListHeader;
  }(SimpleWrapper);

  ;

  ListHeader.propTypes = {
    /**
     * @name modifier
     * @type string
     * @description
     *  [en]
     *  Specify modifier name to specify custom styles. Optional.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    modifier: React.PropTypes.string
  };

  var ListItem = function (_SimpleWrapper) {
    babelHelpers.inherits(ListItem, _SimpleWrapper);

    function ListItem() {
      babelHelpers.classCallCheck(this, ListItem);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
    }

    babelHelpers.createClass(ListItem, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-list-item';
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(ListItem.prototype), 'componentDidMount', this).call(this);
        this.node = ReactDOM.findDOMNode(this);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        babelHelpers.get(Object.getPrototypeOf(ListItem.prototype), 'componentDidUpdate', this).call(this);
        this.node._compile();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var lockOnDrag = _props.lockOnDrag;
        var tapBackgroundColor = _props.tapBackgroundColor;
        var tappable = _props.tappable;
        var others = babelHelpers.objectWithoutProperties(_props, ['lockOnDrag', 'tapBackgroundColor', 'tappable']);


        if (tappable) {
          others.tappable = true;
        }

        if (tapBackgroundColor) {
          others['tap-background-color'] = tapBackgroundColor;
        }

        if (lockOnDrag) {
          others['lock-on-drag'] = lockOnDrag;
        }

        return React.createElement(this._getDomNodeName(), others, this.props.children);
      }
    }]);
    return ListItem;
  }(SimpleWrapper);

  ;

  ListItem.propTypes = {
    modifier: React.PropTypes.string,
    tappable: React.PropTypes.bool,
    tapBackgroundColor: React.PropTypes.string,
    lockOnDrag: React.PropTypes.bool
  };

  /**
   * @original ons-navigator
   * @category navigation
   * @description
   * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.  [/en]
   * [jp] どうしよう[/jp]
   * @example
    <Navigator
      renderPage={(route, navigator) =>
       <MyPage
         title={route.title}
         onPop={() => navigator.popPage()}
         />
      }
      initialRoute={{
          title: 'First Page'
      }} />
     }
   }
   */

  var Navigator = function (_BasicComponent) {
    babelHelpers.inherits(Navigator, _BasicComponent);

    function Navigator(props) {
      babelHelpers.classCallCheck(this, Navigator);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Navigator).call(this, props));

      _this.pages = [];
      _this.state = {};
      return _this;
    }

    babelHelpers.createClass(Navigator, [{
      key: 'update',
      value: function update(pages, obj) {
        var _this2 = this;

        return new Promise(function (resolve) {
          _this2.setState({}, resolve);
        });
      }

      /**
       * @method resetPage
       * @signature resetPage(route, options = {})
       * @param {Object} [route]
       *   [en] The route that the page should be reset to.[/en]
       *   [ja] どうしよう [/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the revealed page.[/en]
       *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en]Resets the current page[/en]
       *   [ja]どうしよう[/ja]
       */

    }, {
      key: 'resetPage',
      value: function resetPage(route) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return this.resetPageStack([route], options);
      }

      /**
       * @method resetPageStack
       * @signature resetPageStack(route, options = {})
       * @param {Array} [routes]
       *   [en] The routes that the navigator should be reset to.[/en]
       *   [ja] どうしよう [/ja]
       * @return {Promise}
       *   [en]Promise which resolves to the revealed page.[/en]
       *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en] Resets the navigator to the current page stack[/en]
       *   [ja] どうしよう[/ja]
       */

    }, {
      key: 'resetPageStack',
      value: function resetPageStack(routes) {
        var _this3 = this;

        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve) {
          var lastRoute = routes[routes.length - 1];
          var newPage = _this3.props.renderPage(lastRoute, _this3);
          _this3.routes.push(lastRoute);

          _this3.refs.navi._pushPage(options, _this3.update.bind(_this3), _this3.pages, newPage).then(function () {
            _this3.routes = routes;

            var renderPage = function renderPage(route) {
              _this3.props.renderPage(route, _this3);
            };

            _this3.pages = routes.map(renderPage);
            _this3.update().then(resolve);
          });
        });
      }

      /**
       * @method pushPage
       * @signature pushPage(route, options = {})
       * @param {Array} [routes]
       *   [en] The routes that the navigator should push to.[/en]
       *   [ja] どうしよう [/ja]
       * @return {Promise}
       *   [en] Promise which resolves to the revealed page.[/en]
       *   [ja] 明らかにしたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en] Pushes a page to the page stack[/en]
       *   [ja] どうしよう[/ja]
       */

    }, {
      key: 'pushPage',
      value: function pushPage(route) {
        var _this4 = this;

        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve) {
          var newPage = _this4.props.renderPage(route, navigator);

          _this4.routes.push(route);
          _this4.refs.navi._pushPage(options, _this4.update.bind(_this4), _this4.pages, newPage).then(resolve);
        });
      }

      /**
       * @method popPage
       * @signature popPage(route, options = {})
       * @return {Promise}
       *   [en] Promise which resolves to the revealed page.[/en]
       *   [ja] 明らかにしたページを解決するPromiseを返します。[/ja]
       * @description
       *   [en] Pops a page out of the page stack[/en]
       *   [ja] どうしよう[/ja]
       */

    }, {
      key: 'popPage',
      value: function popPage() {
        var _this5 = this;

        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return this.refs.navi._popPage(options, this.update.bind(this), this.pages).then(function () {
          _this5.routes.pop();
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this6 = this;

        this.refs.navi.popPage = this.popPage.bind(this);

        if (this.props.initialRoute && this.props.initialRouteStack) {
          throw new Error('In Navigator either initalRoute or initalRoutes can be set');
        }

        if (this.props.initialRoute) {
          this.routes = [this.props.initialRoute];
        } else if (this.props.initialRouteStack) {
          this.routes = this.props.initialRouteStack;
        } else {
          this.routes = [];
        }

        this.pages = this.routes.map(function (route) {
          return _this6.props.renderPage(route, _this6);
        });
        this.setState({});
      }
    }, {
      key: 'render',
      value: function render() {
        // render the last two pages
        for (var index = this.pages.length - 1; index >= this.pages.length - 2 && index >= 0; index--) {
          this.pages[index] = this.props.renderPage(this.routes[index], this);
        }

        return React.createElement(
          'ons-navigator',
          babelHelpers.extends({}, this.props, { ref: 'navi' }),
          this.pages
        );
      }
    }]);
    return Navigator;
  }(BasicComponent);

  Navigator.propTypes = {
    /**
     * @name renderPage
     * @type function
     * @required true
     * @defaultValue null
     * @description
     *  [en] This function takes the current route object as a parameter and  creates returns a react componen.[/en]
     *  [jp] どうしよう[/jp]
     */
    renderPage: React.PropTypes.func.isRequired,
    /**
     * @name initialRouteStack
     * @type array
     * @required false
     * @defaultValue null
     * @description
     *  [en] This array contains the initial routes from the navigator,
     *  which will be used to render the initial pages in the renderPage method.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    initialRouteStack: React.PropTypes.array,

    /**
     * @name initialRoute
     * @type object
     * @required false
     * @defaultValue null
     * @description
     *  [en] This array contains the initial route of the navigator,
     *  which will be used to render the initial pages in the
     *  renderPage method.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    initialRoute: React.PropTypes.object
  };

  /**
   * @original ons-page
   * @category page
   * @description
   * [en] This component is handling the entire page.  THe content can be scrolled. [/en]
   * [jp] どうしよう[/jp]
   * @example
    <Page>
      <div> Page content </div>
    </Page>
   */

  var Page = function (_BasicComponent) {
    babelHelpers.inherits(Page, _BasicComponent);

    function Page() {
      babelHelpers.classCallCheck(this, Page);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
    }

    babelHelpers.createClass(Page, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
        var node = ReactDOM.findDOMNode(this);
        CustomElements.upgrade(node);
        node.addEventListener('init', this.props.onInit);
        node.addEventListener('show', this.props.onShow);
        node.addEventListener('hide', this.props.onHide);
        node.addEventListener('destroy', this.props.onDestroy);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var node = ReactDOM.findDOMNode(this);
        node.removeEventListener('init', this.props.onInit);
        node.removeEventListener('show', this.props.onShow);
        node.removeEventListener('hide', this.props.onHide);
        node.removeEventListener('destroy', this.props.onDestroy);
      }
    }, {
      key: 'render',
      value: function render() {
        var toolbar = this.props.renderToolbar(this);

        // TODO MODAL
        var modal = null;

        return React.createElement(
          'ons-page',
          babelHelpers.extends({}, this.props, { _compiled: 'true' }),
          toolbar,
          React.createElement(
            'div',
            { className: 'page__background' },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'page__content' },
            this.props.children
          ),
          React.createElement(
            'div',
            { className: 'page__extra', style: { zIndex: 10001 } },
            modal
          )
        );
      }
    }]);
    return Page;
  }(BasicComponent);

  ;

  Page.propTypes = {
    /**
     * @name modifier
     * @type string
     * @description
     *  [en]
     *  Specify modifier name to specify custom styles. Optional.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    modifier: React.PropTypes.string,

    /**
     * @name renderToolbar
     * @type function
     * @required false
     * @defaultValue null
     * @description
     *  [en] This function takes the current route object as a parameter and  creates returns a react componen.[/en]
     *  [jp] どうしよう[/jp]
     */
    renderToolbar: React.PropTypes.func,

    /**
     * @name onInit
     * @type function
     * @required false
     * @description
     *  [en]
     *  	Fired right after the page is attached.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    onInit: React.PropTypes.func,

    /**
     * @name onShow
     * @type function
     * @required false
     * @description
     *  [en]
     *  Called Fired right after the page is shown.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    onShow: React.PropTypes.func,

    /**
     * @name onHide
     * @type function
     * @required false
     * @description
     *  [en]
     *  Called after the page is hidden.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    onHide: React.PropTypes.func,

    /**
     * @name onDestroy
     * @type function
     * @required false
     * @description
     *  [en]
     *  Called after the page is destroyed.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    onDestroy: React.PropTypes.func
  };

  Page.defaultProps = {
    renderToolbar: function renderToolbar() {
      return null;
    }
  };

  var Popover = function (_BaseDialog) {
    babelHelpers.inherits(Popover, _BaseDialog);

    function Popover() {
      babelHelpers.classCallCheck(this, Popover);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Popover).apply(this, arguments));
    }

    babelHelpers.createClass(Popover, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-popover';
      }
    }, {
      key: 'show',
      value: function show() {
        var target = this.props.getTarget();
        // target = ReactDOM.findDOMNode(target);
        return this.node.firstChild.show(target);
      }
    }]);
    return Popover;
  }(BaseDialog);

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

  var PullHook = function (_BasicComponent) {
    babelHelpers.inherits(PullHook, _BasicComponent);

    function PullHook() {
      babelHelpers.classCallCheck(this, PullHook);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PullHook).apply(this, arguments));
    }

    babelHelpers.createClass(PullHook, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(PullHook.prototype), 'componentDidMount', this).call(this);
        var node = ReactDOM.findDOMNode(this);
        node.addEventListener('changestate', this.props.onChange);
        CustomElements.upgrade(this.refs.pullHook);
        this.refs.pullHook.setActionCallback(this.props.onLoad);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var node = ReactDOM.findDOMNode(this);
        node.removeEventListener('changestate', this.props.onChange);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var disabled = _props.disabled;
        var thresholdHeight = _props.thresholdHeight;
        var fixedContent = _props.fixedContent;
        var height = _props.height;
        var others = babelHelpers.objectWithoutProperties(_props, ['disabled', 'thresholdHeight', 'fixedContent', 'height']);


        if (disabled) {
          others.disabled = true;
        }

        if (height) {
          others.height = height + 'px';
        }

        if (thresholdHeight) {
          others['threshold-height'] = thresholdHeight + 'px';
        }

        if (fixedContent) {
          others['fixed-content'] = true;
        }

        return React.createElement('ons-pull-hook', babelHelpers.extends({ ref: 'pullHook' }, others));
      }
    }]);
    return PullHook;
  }(BasicComponent);

  PullHook.propTypes = {
    onChange: React.PropTypes.func,
    onLoad: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    height: React.PropTypes.number,
    thresholdHeight: React.PropTypes.number,
    fixedContent: React.PropTypes.bool
  };

  /**
   * @original ons-ripple-
   * @category form
   * @description
   * [en] Adds a Material Design "ripple" effect to an element.  [/en]
   * [jp] どうしよう[/jp]
   * @example
     <div className='myList'>
       <Ripple color='red' />
     </div>
   */

  var Ripple = function (_SimpleWrapper) {
    babelHelpers.inherits(Ripple, _SimpleWrapper);

    function Ripple() {
      babelHelpers.classCallCheck(this, Ripple);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Ripple).apply(this, arguments));
    }

    babelHelpers.createClass(Ripple, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-ripple';
      }
    }]);
    return Ripple;
  }(SimpleWrapper);

  ;

  Ripple.propTypes = {
    color: React.PropTypes.string,
    background: React.PropTypes.string,
    disabled: React.PropTypes.bool
  };

  var SpeedDial = function (_SimpleWrapper) {
    babelHelpers.inherits(SpeedDial, _SimpleWrapper);

    function SpeedDial() {
      babelHelpers.classCallCheck(this, SpeedDial);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SpeedDial).apply(this, arguments));
    }

    babelHelpers.createClass(SpeedDial, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-speed-dial';
      }
    }]);
    return SpeedDial;
  }(SimpleWrapper);

  ;

  SpeedDial.propTypes = {
    modifier: React.PropTypes.string,
    position: React.PropTypes.string,
    direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
    disabled: React.PropTypes.bool
  };

  var SpeedDialItem = function (_SimpleWrapper) {
    babelHelpers.inherits(SpeedDialItem, _SimpleWrapper);

    function SpeedDialItem() {
      babelHelpers.classCallCheck(this, SpeedDialItem);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SpeedDialItem).apply(this, arguments));
    }

    babelHelpers.createClass(SpeedDialItem, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-speed-dial-item';
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(SpeedDialItem.prototype), 'componentDidMount', this).call(this);
        var node = ReactDOM.findDOMNode(this);
        CustomElements.upgrade(node);
        node.addEventListener('click', this.props.onClick);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        var node = ReactDOM.findDOMNode(this);
        node.removeEventListener('click', this.props.onClick);
      }
    }]);
    return SpeedDialItem;
  }(SimpleWrapper);

  ;

  SpeedDialItem.propTypes = {
    modifier: React.PropTypes.string
  };

  var Splitter = function (_SimpleWrapper) {
    babelHelpers.inherits(Splitter, _SimpleWrapper);

    function Splitter() {
      babelHelpers.classCallCheck(this, Splitter);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Splitter).apply(this, arguments));
    }

    babelHelpers.createClass(Splitter, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-splitter';
      }
    }]);
    return Splitter;
  }(SimpleWrapper);

  ;

  var SplitterContent = function (_SimpleWrapper) {
    babelHelpers.inherits(SplitterContent, _SimpleWrapper);

    function SplitterContent() {
      babelHelpers.classCallCheck(this, SplitterContent);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SplitterContent).apply(this, arguments));
    }

    babelHelpers.createClass(SplitterContent, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-splitter-content';
      }
    }]);
    return SplitterContent;
  }(SimpleWrapper);

  ;

  var SplitterSide = function (_BasicComponent) {
    babelHelpers.inherits(SplitterSide, _BasicComponent);

    function SplitterSide() {
      babelHelpers.classCallCheck(this, SplitterSide);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SplitterSide).apply(this, arguments));
    }

    babelHelpers.createClass(SplitterSide, [{
      key: 'render',
      value: function render() {
        var props = babelHelpers.objectWithoutProperties(this.props, []);


        props.collapse = this.props.isCollapsed ? 'collapse' : 'false';
        props.swipeable = this.props.isSwipeable ? 'swipeable' : 'false';

        if (this.props.width) {
          props.width = this.props.width + 'px';
        }

        return React.createElement(
          'ons-splitter-side',
          props,
          this.props.children
        );
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(SplitterSide.prototype), 'componentDidMount', this).call(this);
        this.node = ReactDOM.findDOMNode(this);

        this.node.addEventListener('postopen', this.props.onOpen);
        this.node.addEventListener('postclose', this.props.onClose);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.node.removeEventListener('postopen', this.props.onOpen);
        this.node.removeEventListener('postclose', this.props.onClose);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (newProps.isOpen) {
          this.node.open();
        } else {
          this.node.close();
        }
      }
    }]);
    return SplitterSide;
  }(BasicComponent);

  SplitterSide.propTypes = {
    isCollapsed: React.PropTypes.bool.isRequired,
    isSwipable: React.PropTypes.bool,
    isOpen: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    // value out of left, right ...
    side: React.PropTypes.string,
    width: React.PropTypes.number
  };

  var Switch = function (_BasicComponent) {
    babelHelpers.inherits(Switch, _BasicComponent);

    function Switch() {
      babelHelpers.classCallCheck(this, Switch);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Switch).apply(this, arguments));
    }

    babelHelpers.createClass(Switch, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(Switch.prototype), 'componentDidMount', this).call(this);
        this.refs.switch.addEventListener('change', this.props.onChange);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.refs.switch.removeEventListener('change', this.props.onChange);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props;
        var checked = _props.checked;
        var inputId = _props.inputId;
        var other = babelHelpers.objectWithoutProperties(_props, ['checked', 'inputId']);


        if (inputId) {
          other['input-id'] = inputId;
        }
        return React.createElement('ons-switch', babelHelpers.extends({ ref: 'switch', checked: checked ? '' : null }, other));
      }
    }]);
    return Switch;
  }(BasicComponent);

  ;

  Switch.propTypes = {
    onChange: React.PropTypes.func,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    inputId: React.PropTypes.string
  };

  var Tab = function (_SimpleWrapper) {
    babelHelpers.inherits(Tab, _SimpleWrapper);

    function Tab() {
      babelHelpers.classCallCheck(this, Tab);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tab).apply(this, arguments));
    }

    babelHelpers.createClass(Tab, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-tab';
      }
    }]);
    return Tab;
  }(SimpleWrapper);

  ;

  var TabActive = function (_SimpleWrapper) {
    babelHelpers.inherits(TabActive, _SimpleWrapper);

    function TabActive() {
      babelHelpers.classCallCheck(this, TabActive);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TabActive).apply(this, arguments));
    }

    babelHelpers.createClass(TabActive, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-tab-active';
      }
    }]);
    return TabActive;
  }(SimpleWrapper);

  ;

  var TabInactive = function (_SimpleWrapper) {
    babelHelpers.inherits(TabInactive, _SimpleWrapper);

    function TabInactive() {
      babelHelpers.classCallCheck(this, TabInactive);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(TabInactive).apply(this, arguments));
    }

    babelHelpers.createClass(TabInactive, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-tab-inactive';
      }
    }]);
    return TabInactive;
  }(SimpleWrapper);

  ;

  var Tabbar = function (_BasicComponent) {
    babelHelpers.inherits(Tabbar, _BasicComponent);

    function Tabbar(props) {
      babelHelpers.classCallCheck(this, Tabbar);

      var _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Tabbar).call(this, props));

      _this.state = {
        activeIndex: props.initialIndex || 0
      };
      return _this;
    }

    babelHelpers.createClass(Tabbar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        babelHelpers.get(Object.getPrototypeOf(Tabbar.prototype), 'componentDidMount', this).call(this);
        var node = this.refs.tabbar;
        CustomElements.upgrade(node);
        node.setActiveTab(this.state.activeIndex);
        node.addEventListener('prechange', this.handleChange.bind(this));
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.refs.tabbar.removeEventListener('prechange', this.handleChange);
      }
    }, {
      key: 'handleChange',
      value: function handleChange(event) {
        this.setState({ activeIndex: event.index });
      }
    }, {
      key: 'setActiveTab',
      value: function setActiveTab(index, options) {
        this.refs.tabbar.setActiveTab(index, options);
      }
    }, {
      key: 'getActiveTabIndex',
      value: function getActiveTabIndex() {
        return this.refs.tabbar.getActiveTabIndex();
      }
    }, {
      key: 'render',
      value: function render() {
        var tabs = this.props.renderTabs(this.state.activeIndex, this);

        return React.createElement(
          'ons-tabbar',
          babelHelpers.extends({}, this.props, { ref: 'tabbar', activeIndex: this.state.activeIndex, _compiled: 'true' }),
          React.createElement(
            'div',
            { 'no-status-bar-fill': true, className: 'ons-tab-bar__content tab-bar__content' + (this.props.position === 'top' ? ' tab-bar--top__content' : '') },
            tabs.map(function (tab) {
              return tab.content;
            })
          ),
          React.createElement(
            'div',
            { className: 'tab-bar ons-tab-bar__footer ons-tabbar-inner' + (this.props.position === 'top' ? ' tab-bar--top' : '') },
            tabs.map(function (tab) {
              return tab.tab;
            })
          )
        );
      }
    }]);
    return Tabbar;
  }(BasicComponent);

  ;

  Tabbar.propTypes = {
    initialIndex: React.PropTypes.number.isRequired,
    renderTabs: React.PropTypes.func.isRequired
  };

  Tabbar.defaultProps = {
    initialIndex: 0
  };

  /**
   * I'm a toolbar!
   */

  var Toolbar = function (_SimpleWrapper) {
    babelHelpers.inherits(Toolbar, _SimpleWrapper);

    function Toolbar() {
      babelHelpers.classCallCheck(this, Toolbar);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).apply(this, arguments));
    }

    babelHelpers.createClass(Toolbar, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-toolbar';
      }
    }]);
    return Toolbar;
  }(SimpleWrapper);

  ;

  Toolbar.propTypes = {
    /**
     * @name modifier
     * @type string
     * @description
     *  [en]
     *  Specify modifier name to specify custom styles. Optional.
     *  [/en]
     *  [jp] どうしよう[/jp]
     */
    modifier: React.PropTypes.string
  };

  var ToolbarButton = function (_SimpleWrapper) {
    babelHelpers.inherits(ToolbarButton, _SimpleWrapper);

    function ToolbarButton() {
      babelHelpers.classCallCheck(this, ToolbarButton);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(ToolbarButton).apply(this, arguments));
    }

    babelHelpers.createClass(ToolbarButton, [{
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        return 'ons-toolbar-button';
      }
    }]);
    return ToolbarButton;
  }(SimpleWrapper);

  ;

  exports.AlertDialog = AlertDialog;
  exports.BackButton = BackButton;
  exports.BottomToolbar = BottomToolbar;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.CarouselItem = CarouselItem;
  exports.Dialog = Dialog;
  exports.Fab = Fab;
  exports.Icon = Icon;
  exports.Input = Input;
  exports.LazyList = LazyList;
  exports.List = List;
  exports.ListHeader = ListHeader;
  exports.ListItem = ListItem;
  exports.Navigator = Navigator;
  exports.Page = Page;
  exports.Popover = Popover;
  exports.PullHook = PullHook;
  exports.Ripple = Ripple;
  exports.SpeedDial = SpeedDial;
  exports.SpeedDialItem = SpeedDialItem;
  exports.Splitter = Splitter;
  exports.SplitterContent = SplitterContent;
  exports.SplitterSide = SplitterSide;
  exports.Switch = Switch;
  exports.Tab = Tab;
  exports.TabActive = TabActive;
  exports.TabInactive = TabInactive;
  exports.Tabbar = Tabbar;
  exports.Toolbar = Toolbar;
  exports.ToolbarButton = ToolbarButton;

}));
//# sourceMappingURL=react-onsenui.js.map