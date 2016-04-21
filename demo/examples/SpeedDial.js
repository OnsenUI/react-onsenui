import React from 'react';

import {Page, Icon, Ripple, Fab,   SpeedDial, SpeedDialItem, Button} from 'react-onsenui';

import MyToolbar from './MyToolbar';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: 'material'
    };
  }

  render() {
    return (
      <Page>
        <SpeedDial onClick={() => console.log('test1')} position='left bottom'>
          <Fab> <Icon
            icon='fa-twitter'
            size={26}
            fixedWidth={false}
            style={{verticalAlign: 'middle'}} />
        </Fab>
        <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
        <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
        <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
        <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
      </SpeedDial>
      </Page>
    );
  }
}
