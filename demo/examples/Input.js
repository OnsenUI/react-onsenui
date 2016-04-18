import React from 'react';

import {
  Page,
  List,
  ListItem,
  Toolbar,
  ToolbarButton,
  BackButton,
  Button,
  Input
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [1, 2, 3, 4, 5, 6],
      text: 'te'
    };
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">List</div>
          <div className="right">
            <ToolbarButton >FLIP</ToolbarButton>
          </div>
        </Toolbar>
        <div> Please enter a text </div>
        <p>
          <Input value={this.state.text} onChange={(event) => {
            this.setState({text: event.target.value})} } modifier='material' float placeholder="Username"
            ></Input>
          <div> Text : {this.state.text} </div>
        </p>
      </Page>
    );
  }
}
