import React from 'react';

import {Tabbar, Tab, Page, Toolbar, Button, BackButton} from 'react-onsenui';

class TabPage extends React.Component {
  switchTab() {
    const index = this.props.tabbar.getActiveTabIndex();
    this.props.tabbar.setActiveTab((index + 1) % 2);
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">{this.props.title}</div>
        </Toolbar>

        {this.props.active ?
          <p>This is the <strong>{this.props.title}</strong> page.</p> : null}

        <Button onClick={this.switchTab.bind(this)}>Go to the other tab</Button>
      </Page>
    );
  }
}

export default class extends React.Component {
  renderTabs(activeIndex, tabbar) {
    return [
      {
        content: <TabPage title="Home" active={activeIndex === 0} tabbar={tabbar} />,
        tab: <Tab label="Home" icon="md-home" />
      },
      {
        content: <TabPage title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
        tab: <Tab label="Settings" icon="md-settings" />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          renderTabs={this.renderTabs}
        />
      </Page>
    );
  }
}
