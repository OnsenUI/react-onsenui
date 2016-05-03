import React from 'react';

import {
  Page,
  Toolbar,
  ToolbarButton,
  BackButton,
  Input
} from 'react-onsenui';

import MyToolbar from './MyToolbar';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'text'
    };
  }

  render() {
    return (
      <Page
        renderToolbar = { () => <Toolbar>
          <div className='left'><BackButton>Back</BackButton></div>
          <div className='center'>Input</div>
        </Toolbar>
        }
        >
        <p>
        Please enter a text
        </p>
          <Input value={this.state.text} float onChange={(event) => {
            this.setState({text: event.target.value})} } modifier='material' placeholder='Username'></Input>
          <div> Text : {this.state.text} </div>
      </Page>
    );
  }
}
