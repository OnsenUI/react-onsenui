import React from 'react';

var createSimpleWrapperClass = function(domName) {
  return class SimpleClass extends React.Component {
    render() {
      var {disabled, ...others} = this.props;

      if (disabled) {
        others.disabled = 'disabled';
      }

      return React.createElement(domName, others, this.props.children);
    }
  }
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
var ListItem = createSimpleWrapperClass('ons-list-item');
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
  ListItem,
  Ripple,
  Scroller,
  SpeedDial,
  SpeedDialItem,
  Tab,
  TabActive,
  TabInactive,
  Toolbar,
  ToolbarButton,
};
