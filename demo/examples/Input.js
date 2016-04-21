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
      data: [1, 2, 3, 4, 5, 6],
      text: 'te'
    };
  }

  reverseData() {
    this.setState({
      data: this.state.data.reverse()
    });
  }

  remove(idx) {
    const data = this.state.data;
    data.splice(idx, 1);

    this.setState({
      data: data
    });
  }

  add() {
    const data = this.state.data;
    data.push(data.length);

    this.setState({
      data: data,
      text: ''
    });
  }

  render() {
    return (
      <Page
        renderToolbar = { () => <Toolbar>
          <div className='left'><BackButton>Back</BackButton></div>
          <div className='center'>Input</div>
          <div className='right'>
            <ToolbarButton >FLIP</ToolbarButton>
          </div>
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
