import React from 'react';
import ReactDOM from 'react-dom';

var createSimpleWrapperClass = function(domName) {
  return class SimpleClass extends React.Component {

    constructor(props) {
      super(props);
      this.updateClasses = this.updateClasses.bind(this);
    }

    updateClasses() {
      var node = ReactDOM.findDOMNode(this);

      if (this.props.className) {
        if (this.lastClass) {
          node.className = node.className.replace(this.lastClass, '');
        }

        this.lastClass = ' ' + this.props.className;
        node.className += this.lastClass;
      }
    }

    componentDidMount() {
      this.updateClasses();
    }

    componentDidUpdate() {
      this.updateClasses();
    }

    render() {
      var {disabled, ...others} = this.props;

      if (disabled) {
        others.disabled = 'disabled';
      }

      return React.createElement(domName, others, this.props.children);
    }
  };
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

export {
  BackButton,
  BottomToolbar,
  Button,
  Carousel,
  CarouselCover,
  CarouselItem,
  Fab,
  Icon,
  ListHeader,
  Ripple,
  Scroller,
  SpeedDial,
  SpeedDialItem,
  Tab,
  TabActive,
  TabInactive,
  Toolbar,
  ToolbarButton
};
