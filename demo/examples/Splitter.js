import React from 'react';

import {
  Splitter, 
  SplitterSide, 
  SplitterContent, 
  Tabbar, 
  Tab, 
  Page, 
  Toolbar, 
  ToolbarButton,
  Button, 
  BackButton
} from 'react-onsenui';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLeft: false,
      showRight: false,
    };

  }
  render() {
    return (
      <Page>
        <Splitter>
          <SplitterSide side="left" width={200} isCollapsed={!this.state.showLeft} isSwipeable={true}>
            <Page>
              <Toolbar>
                <div className="center">content</div>
              </Toolbar>
            </Page>
          </SplitterSide>

          <SplitterContent>
            <Page>
              <Toolbar>
                <div className="center">ons-splitter-content</div>
              </Toolbar>
              <p>
                <Button
                  onClick={() => this.setState({showLeft: !this.state.showLeft })}
                  >toggle left menu 2</Button>
              </p>
              <p>
                <Button 
                  onClick={() => this.setState({showRight: !this.state.showRight })} > toggle right menu</Button> </p>
            </Page>
          </SplitterContent>

          <SplitterSide side="right" width={300} isCollapsed={!this.state.showRight} isSwipeable={true}  threhold-ratio-should-open="0.4">
            <Page>
              <Toolbar>
                <div className="left">
                  <ToolbarButton onClick={() => this.setState({showRight: false })} > Close </ToolbarButton>
                </div>
                <div className="center">ons-splitter-side</div>
              </Toolbar>
            </Page>
          </SplitterSide>
        </Splitter>
      </Page>
    );
  }
}
