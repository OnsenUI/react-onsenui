import React from 'react';
import ReactDOM from 'react-dom';
import MyToolbar from './MyToolbar';

import {
  Page,
  Button,
  Navigator,
  Toolbar,
  List,
  ListItem,
  Ripple,
  Carousel,
  CarouselItem,
  BottomToolbar,
  ToolbarButton
} from '../../src/index.js';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 1};
    this.goTo = this.goTo.bind(this);
  }

  goTo(number) {
    console.log('number', number);
    this.setState({index: number});
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
          index={this.state.index}
          onPostChange={(event) => this.setState({index: event.activeIndex})}
          onOverscroll={() => console.log('onOverscroll')}
          onRefresh={() => console.log('onRefresh')}
          ref='carousel' swipeable overscrollable autoScroll fullscreen autoScrollRatio={0.2}>
          <CarouselItem style={{backgroundColor: 'gray'}}>
            <div className='item-label'>GRAY</div>
            <Button onClick={() => this.goTo(0)}> Go to page 1 </Button>
            <Button onClick={() => this.goTo(1)}> Go to page 2 </Button>
            <Button onClick={() => this.goTo(2)}> Go to page 3 </Button>
            <Button onClick={() => this.goTo(3)}> Go to page 4 </Button>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#085078'}}>
            <div className='item-label'>BLUE</div>
            <Button onClick={() => this.goTo(0)}> Go to page 1 </Button>
            <Button onClick={() => this.goTo(1)}> Go to page 2 </Button>
            <Button onClick={() => this.goTo(2)}> Go to page 3 </Button>
            <Button onClick={() => this.goTo(3)}> Go to page 4 </Button>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#373B44'}}>
            <div className='item-label'>DARK</div>
            <Button onClick={() => this.goTo(0)}> Go to page 1 </Button>
            <Button onClick={() => this.goTo(1)}> Go to page 2 </Button>
            <Button onClick={() => this.goTo(2)}> Go to page 3 </Button>
            <Button onClick={() => this.goTo(3)}> Go to page 4 </Button>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#D38312'}}>
            <div className='item-label'>ORANGE</div>
            <Button onClick={() => this.goTo(0)}> Go to page 1 </Button>
            <Button onClick={() => this.goTo(1)}> Go to page 2 </Button>
            <Button onClick={() => this.goTo(2)}> Go to page 3 </Button>
            <Button onClick={() => this.goTo(3)}> Go to page 4 </Button>
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
