import React from 'react';

import {
  Page,
  Icon,
  Fab,
  SpeedDial,
  SpeedDialItem,
  Toolbar,
  BackButton
} from '../../src/index.js';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modifier: 'material',
    };
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>
          Speed Dial
        </div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
          <Fab>
            <Icon
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
