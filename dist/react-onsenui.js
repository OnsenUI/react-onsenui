/*! react-onsenui v0.0.18 - Tue Apr 12 2016 12:55:47 GMT+0900 (JST) */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('react-dom/server')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'react-dom/server'], factory) :
  (factory((global.Ons = global.Ons || {}),global.React,global.ReactDOM,global.ReactDOMServer));
}(this, function (exports,React,ReactDOM,ReactDOMServer) { 'use strict';

  React = 'default' in React ? React['default'] : React;
  ReactDOM = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
  ReactDOMServer = 'default' in ReactDOMServer ? ReactDOMServer['default'] : ReactDOMServer;

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
      key: 'hide',
      value: function hide() {
        this.node.firstChild.hide();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.node = document.createElement('div');
        document.body.appendChild(this.node);

        this.node.addEventListener('cancel', function () {
          _this2.props.onCancel();
        });
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
      }
    }, {
      key: '_getDomNodeName',
      value: function _getDomNodeName() {
        throw new Error('_getDomNodeName is not implemented');
      }
    }, {
      key: 'renderPortal',
      value: function renderPortal(props) {
        var element = React.createElement(this._getDomNodeName(), props);
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
    onCancel: React.PropTypes.func.isRequired,
    isOpen: React.PropTypes.bool.isRequired
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

  var AlertDialog = function (_BaseDialog2) {
    babelHelpers.inherits(AlertDialog, _BaseDialog2);

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

  var Popover = function (_BaseDialog3) {
    babelHelpers.inherits(Popover, _BaseDialog3);

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

  Popover.propTypes = babelHelpers.extends({}, BaseDialog.propTypes, {
    getTarget: React.PropTypes.func.isRequired
  });

  var EVENT_TYPES = ['change', 'input'];

  var Input = function (_React$Component) {
    babelHelpers.inherits(Input, _React$Component);

    function Input() {
      babelHelpers.classCallCheck(this, Input);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
    }

    babelHelpers.createClass(Input, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

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


        return React.createElement('ons-input', babelHelpers.extends({ checked: checked ? '' : null }, other));
      }
    }]);
    return Input;
  }(React.Component);

  Input.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string
  };

  var _class = function (_React$Component) {
    babelHelpers.inherits(_class, _React$Component);

    function _class() {
      babelHelpers.classCallCheck(this, _class);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
    }

    babelHelpers.createClass(_class, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.node._compile();
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'ons-list-item',
          this.props,
          this.props.children
        );
      }
    }]);
    return _class;
  }(React.Component);

  var LazyList = function (_React$Component) {
    babelHelpers.inherits(LazyList, _React$Component);
    babelHelpers.createClass(LazyList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
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

              return React.createElement(
                _class,
                { key: index, 'class': 'list__item', _compiled: true },
                self.props.renderRow(index)
              );
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
  }(React.Component);

  LazyList.propTypes = {
    length: React.PropTypes.number.isRequired,
    renderRow: React.PropTypes.func.isRequired,
    calculateItemHeight: React.PropTypes.func.isRequired
  };

  var List = function (_React$Component) {
    babelHelpers.inherits(List, _React$Component);

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
  }(React.Component);

  List.defaultProps = {
    renderHeader: function renderHeader() {
      return null;
    },
    renderFooter: function renderFooter() {
      return null;
    }
  };

  List.propTypes = {
    dataSource: React.PropTypes.array.isRequired
  };

  var Navigator = function (_React$Component) {
    babelHelpers.inherits(Navigator, _React$Component);

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
    }, {
      key: 'resetPage',
      value: function resetPage(route) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return this.resetPageStack([route], options);
      }
    }, {
      key: 'resetPageStack',
      value: function resetPageStack(routes) {
        var _this3 = this;

        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve) {
          var lastRoute = routes[routes.length - 1];
          var newPage = _this3.props.renderScene(lastRoute, _this3);
          _this3.routes.push(lastRoute);

          _this3.refs.navi._pushPage(options, _this3.update.bind(_this3), _this3.pages, newPage).then(function () {
            _this3.routes = routes;

            var renderScene = function renderScene(route) {
              _this3.props.renderScene(route, _this3);
            };

            _this3.pages = routes.map(renderScene);
            _this3.update().then(resolve);
          });
        });
      }
    }, {
      key: 'pushPage',
      value: function pushPage(route) {
        var _this4 = this;

        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new Promise(function (resolve) {
          var newPage = _this4.props.renderScene(route, navigator);

          _this4.routes.push(route);
          _this4.refs.navi._pushPage(options, _this4.update.bind(_this4), _this4.pages, newPage).then(resolve);
        });
      }
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

        if (this.props.initialRoute && this.props.initialRoutes) {
          throw new Error('In Navigator either initalRoute or initalRoutes can be set');
        }

        if (this.props.initialRoute) {
          this.routes = [this.props.initialRoute];
        } else if (this.props.initialRoutes) {
          this.routes = this.props.initialRoutes;
        } else {
          this.routes = [];
        }

        this.pages = this.routes.map(function (route) {
          return _this6.props.renderScene(route, _this6);
        });
        this.setState({});
      }
    }, {
      key: 'render',
      value: function render() {
        // render the last two pages
        for (var index = this.pages.length - 1; index >= this.pages.length - 2 && index >= 0; index--) {
          this.pages[index] = this.props.renderScene(this.routes[index], this);
        }

        return React.createElement(
          'ons-navigator',
          babelHelpers.extends({}, this.props, { ref: 'navi' }),
          this.pages
        );
      }
    }]);
    return Navigator;
  }(React.Component);

  Navigator.propTypes = {
    renderScene: React.PropTypes.func.isRequired,
    initialRoutes: React.PropTypes.array,
    initialRoute: React.PropTypes.object
  };

  var reactUtil = {};

  reactUtil.rendersToPage = function (obj) {
    var htmlString = ReactDOMServer.renderToStaticMarkup(obj);
    return htmlString.startsWith('<ons-page');
  };

  reactUtil.rendersTo = function (obj, str) {
    var htmlString = ReactDOMServer.renderToStaticMarkup(obj);
    return htmlString.startsWith(str);
  };

  reactUtil.rendersToToolbar = function (obj) {
    var htmlString = ReactDOMServer.renderToStaticMarkup(obj);
    return htmlString.startsWith('<ons-toolbar');
  };

  reactUtil.rendersToModal = function (obj) {
    var htmlString = ReactDOMServer.renderToStaticMarkup(obj);
    return htmlString.startsWith('<ons-modal');
  };

  reactUtil.lastChild = function (el) {
    return el.children[el.children.length - 1];
  };

  reactUtil.createCustomDialog = function (component) {
    var body = document.body;
    var container = document.createElement('div');
    body.appendChild(container);

    return new Promise(function (resolve) {
      ReactDOM.render(component, container, function () {
        resolve(container.firstChild);
      });
    });
  };

  reactUtil.templateMap = {};

  var Page = function (_React$Component) {
    babelHelpers.inherits(Page, _React$Component);

    function Page() {
      babelHelpers.classCallCheck(this, Page);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Page).apply(this, arguments));
    }

    babelHelpers.createClass(Page, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var node = ReactDOM.findDOMNode(this);
        CustomElements.upgrade(node);
      }
    }, {
      key: 'render',
      value: function render() {
        var toolbar;
        var modal;
        var otherChildren = [];

        React.Children.forEach(this.props.children, function (child) {
          if (child == null) return;
          if (reactUtil.rendersToToolbar(child)) {
            toolbar = child;
          } else if (reactUtil.rendersToModal(child)) {
            modal = child;
          } else {
            otherChildren.push(child);
          }
        });

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
            otherChildren
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
  }(React.Component);

  ;

  var PullHook = function (_React$Component) {
    babelHelpers.inherits(PullHook, _React$Component);

    function PullHook() {
      babelHelpers.classCallCheck(this, PullHook);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(PullHook).apply(this, arguments));
    }

    babelHelpers.createClass(PullHook, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
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
        return React.createElement('ons-pull-hook', babelHelpers.extends({ ref: 'pullHook' }, this.props));
      }
    }]);
    return PullHook;
  }(React.Component);

  var Switch = function (_React$Component) {
    babelHelpers.inherits(Switch, _React$Component);

    function Switch() {
      babelHelpers.classCallCheck(this, Switch);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Switch).apply(this, arguments));
    }

    babelHelpers.createClass(Switch, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
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
        var other = babelHelpers.objectWithoutProperties(_props, ['checked']);


        return React.createElement('ons-switch', babelHelpers.extends({ ref: 'switch', checked: checked ? '' : null }, other));
      }
    }]);
    return Switch;
  }(React.Component);

  ;

  Switch.propTypes = {
    onChange: React.PropTypes.func,
    checked: React.PropTypes.bool
  };

  var Tabbar = function (_React$Component) {
    babelHelpers.inherits(Tabbar, _React$Component);

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
            { 'no-status-bar-fill': true, className: 'ons-tab-bar__content tab-bar__content' },
            tabs.map(function (tab) {
              return tab.content;
            })
          ),
          React.createElement(
            'div',
            { className: 'tab-bar ons-tab-bar__footer ons-tabbar-inner' },
            tabs.map(function (tab) {
              return tab.tab;
            })
          )
        );
      }
    }]);
    return Tabbar;
  }(React.Component);

  ;

  Tabbar.propTypes = {
    initialIndex: React.PropTypes.number.isRequired,
    renderTabs: React.PropTypes.func.isRequired
  };

  Tabbar.defaultProps = {
    initialIndex: 0
  };

  var Splitter = function (_React$Component) {
    babelHelpers.inherits(Splitter, _React$Component);

    function Splitter() {
      babelHelpers.classCallCheck(this, Splitter);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Splitter).apply(this, arguments));
    }

    babelHelpers.createClass(Splitter, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'ons-splitter',
          null,
          this.props.children
        );
      }
    }]);
    return Splitter;
  }(React.Component);

  var SplitterSide = function (_React$Component2) {
    babelHelpers.inherits(SplitterSide, _React$Component2);

    function SplitterSide() {
      babelHelpers.classCallCheck(this, SplitterSide);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SplitterSide).apply(this, arguments));
    }

    babelHelpers.createClass(SplitterSide, [{
      key: 'render',
      value: function render() {
        var props = Object.assign({}, this.props);

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
    }]);
    return SplitterSide;
  }(React.Component);

  var SplitterContent = function (_React$Component3) {
    babelHelpers.inherits(SplitterContent, _React$Component3);

    function SplitterContent() {
      babelHelpers.classCallCheck(this, SplitterContent);
      return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SplitterContent).apply(this, arguments));
    }

    babelHelpers.createClass(SplitterContent, [{
      key: 'render',
      value: function render() {
        var props = Object.assign({}, this.props);

        return React.createElement(
          'ons-splitter-content',
          props,
          this.props.children
        );
      }
    }]);
    return SplitterContent;
  }(React.Component);

  SplitterSide.propTypes = {
    isCollapsed: React.PropTypes.bool.isRequired,
    isSwipable: React.PropTypes.bool,
    // value out of left, right ...
    side: React.PropTypes.string,
    width: React.PropTypes.number
  };

  var createSimpleWrapperClass = function createSimpleWrapperClass(domName) {
    return function (_React$Component) {
      babelHelpers.inherits(SimpleClass, _React$Component);

      function SimpleClass() {
        babelHelpers.classCallCheck(this, SimpleClass);
        return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SimpleClass).apply(this, arguments));
      }

      babelHelpers.createClass(SimpleClass, [{
        key: 'render',
        value: function render() {
          var _props = this.props;
          var disabled = _props.disabled;
          var others = babelHelpers.objectWithoutProperties(_props, ['disabled']);


          if (disabled) {
            others.disabled = 'disabled';
          }

          return React.createElement(domName, others, this.props.children);
        }
      }]);
      return SimpleClass;
    }(React.Component);
  };

  var BackButton = createSimpleWrapperClass('ons-back-button');
  var BottomToolbar = createSimpleWrapperClass('ons-buttom-toolbar');
  var Button = createSimpleWrapperClass('ons-button');
  var Carousel = createSimpleWrapperClass('ons-carousel');
  var CarouselCover = createSimpleWrapperClass('ons-carousel-cover');
  var CarouselItem = createSimpleWrapperClass('ons-carousel-item');
  var Fab = createSimpleWrapperClass('ons-fab');
  var Icon = createSimpleWrapperClass('ons-icon');
  var ListHeader = createSimpleWrapperClass('ons-list-header');
  var Ripple = createSimpleWrapperClass('ons-ripple');
  var Scroller = createSimpleWrapperClass('ons-scroller');
  var SpeedDial = createSimpleWrapperClass('ons-speed-dial');
  var SpeedDialItem = createSimpleWrapperClass('ons-speed-dial-item');
  var Tab = createSimpleWrapperClass('ons-tab');
  var TabActive = createSimpleWrapperClass('ons-tab-active');
  var TabInactive = createSimpleWrapperClass('ons-tab-inactive');
  var Toolbar = createSimpleWrapperClass('ons-toolbar');
  var ToolbarButton = createSimpleWrapperClass('ons-toolbar-button');

  exports.AlertDialog = AlertDialog;
  exports.BackButton = BackButton;
  exports.BottomToolbar = BottomToolbar;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.CarouselCover = CarouselCover;
  exports.CarouselItem = CarouselItem;
  exports.Dialog = Dialog;
  exports.Fab = Fab;
  exports.Icon = Icon;
  exports.Input = Input;
  exports.LazyList = LazyList;
  exports.List = List;
  exports.ListHeader = ListHeader;
  exports.ListItem = _class;
  exports.Navigator = Navigator;
  exports.Page = Page;
  exports.Popover = Popover;
  exports.PullHook = PullHook;
  exports.Ripple = Ripple;
  exports.Scroller = Scroller;
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