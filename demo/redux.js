import React from 'react';
import ReactDOM from 'react-dom';

import '../OnsenUI/build/js/onsenui.js';

import '../OnsenUI/build/css/onsenui.css';
import '../OnsenUI/build/css/onsen-css-components.css';

import {
  Page,
  RouterNavigator,
  Button
} from '../src/index.js';

import MyToolbar from './examples//MyToolbar';

class MyPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.popPage = this.popPage.bind(this);
  }

  popPage() {
    this.props.popPage();
  }

  render() {
    return (
      <Page
        renderToolbar={() => <MyToolbar title='Page 2' />}
      >
        Hello world 2
        <Button onClick={this.popPage}> Pop Page </Button>
      </Page>
    );
  }
}

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pushPage = this.pushPage.bind(this);
  }

  pushPage() {
    this.props.pushPage();
  }

  render() {
    return (
      <Page
        renderToolbar={() => <MyToolbar title='Page' />}
      >
        Hello world
        <Button onClick={this.pushPage}> Push Page </Button>
      </Page>
    );
  }
};

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  constructor(props) {
    super(props);
    this.pushPage = this.pushPage.bind(this);
    this.popPage = this.popPage.bind(this);
    this.state = {
      routes: [{
        component: MyPage,
        props: {
          key: 'examples',
          pushPage: this.pushPage
        }
      }]
    };
  }

  popPage() {
    console.log('popPage');
    this.setState({
      routes: [{
        component: MyPage,
        props: {
          key: 'examples',
          pushPage: this.pushPage,
          popPage: this.popPage
        }
      }]
    });
  }

  pushPage() {
    this.setState({
      routes: [{
        component: MyPage,
        props: {
          key: 'examples',
          pushPage: this.pushPage,
          popPage: this.popPage
        }
      },
      {
        component: MyPage2,
        props: {
          key: 'examples2',
          pushPage: this.pushPage,
          popPage: this.popPage
        }
      }
      ]
    });
  }

  render() {
    return (
      <RouterNavigator
        renderPage={this.renderPage}
        onPrePush={e => console.log('prepush', e)}
        onPostPush={e => console.log('postpush', e)}
        onPrePop={e => console.log('prepop', e)}
        onPostPop={e => console.log('postpop', e)}
        routes={this.state.routes}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
