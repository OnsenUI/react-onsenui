import React from 'react';
import ReactDOM from 'react-dom';
import MyToolbar from './MyToolbar';

import {
  Page,
  Navigator,
  Toolbar,
  List,
  ListItem,
  Ripple,
  Carousel,
  CarouselItem,
  BottomToolbar,
  ToolbarButton
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Page renderToolbar={() => <MyToolbar title='Fullscreen' />}>
        <Carousel
          animationOptions={{
            duration: 1.0,
            delay: 0.3,
            timing: 'ease-in'
          }}
          onPostChange={() => console.log('onPostChange')}
          onOverscroll={() => console.log('onOverscroll')}
          onRefresh={() => console.log('onRefresh')}
          ref='carousel' swipeable overscrollable autoScroll fullscreen autoScrollRatio={0.2}>
          <CarouselItem style={{backgroundColor: 'gray'}}>
            <div className='item-label'>GRAY</div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#085078'}}>
            <div className='item-label'>BLUE</div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#373B44'}}>
            <div className='item-label'>DARK</div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#D38312'}}>
            <div className='item-label'>ORANGE</div>
          </CarouselItem>
        </Carousel>

        <BottomToolbar>
          <ToolbarButton style={{float: 'right'}} onClick={this.moveRight}>Next</ToolbarButton>
          <ToolbarButton style={{float: 'left'}} onClick={this.moveLeft}>Prev</ToolbarButton>
        </BottomToolbar>
      </Page>
    );
  }
};
