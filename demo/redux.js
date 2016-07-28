import React from 'react';
import ReactDOM from 'react-dom';

import '../OnsenUI/build/js/onsenui.js';

import '../OnsenUI/build/css/onsenui.css';
import '../OnsenUI/build/css/onsen-css-components.css';

import {
  Page,
  RouterNavigator,
  Button,
  RouterUtil
} from '../src/index.js';

import MyToolbar from './examples//MyToolbar';

class MyPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.popPage = this.popPage.bind(this);
    this.popPage2 = this.popPage2.bind(this);
  }

  popPage() {
    this.props.popPage();
  }

  popPage2() {
    this.props.popPage2();
  }

  render() {
    return (
      <Page
        renderToolbar={() => <MyToolbar title='Page 3' />}
      >
        {this.props.text}
        <Button onClick={this.popPage}> Pop Page </Button> <br />
        {this.props.popPage2 ? <Button onClick={this.popPage2}> Pop Two Page2 </Button> : <div />}
      </Page>
    );
  }
}

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pushPage = this.pushPage.bind(this);
    this.pushPage2 = this.pushPage2.bind(this);
  }

  pushPage() {
    this.props.pushPage();
  }

  pushPage2() {
    this.props.pushPage2();
  }

  render() {
    return (
      <Page
        renderToolbar={() => <MyToolbar title='Page' />}
      >
        {this.props.text} <br />
        <Button onClick={this.pushPage}> Push Page </Button> <br />
        <Button onClick={this.pushPage2}> Push Two Pages </Button>
      </Page>
    );
  }
}

class App extends React.Component {
  renderPage(route, navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, route.props);
  }

  constructor(props) {
    super(props);
    this.pushPage = this.pushPage.bind(this);
    this.pushPage2 = this.pushPage2.bind(this);
    this.popPage = this.popPage.bind(this);
    this.popPage2 = this.popPage2.bind(this);
    this.postPush = this.postPush.bind(this);
    this.postPop = this.postPop.bind(this);

    this.state = {
      routeConfig: RouterUtil.init([{
        component: MyPage,
        props: {
          key: 'examples',
          text: 'Page 1',
          pushPage: this.pushPage,
          pushPage2: this.pushPage2
        }
      }])
    };
  }

  popPage() {
    let options = {
      animation: 'slide',
      animationOptions: {
        duration: 2,
        delay: 0.1,
        timing: 'ease-in'
      }
    };

    let routeConfig = RouterUtil.pop({
      routeConfig: this.state.routeConfig,
      options
    });

    this.setState({routeConfig});
  }

  popPage2() {
    let routeConfig = RouterUtil.pop({routeConfig: this.state.routeConfig});
    routeConfig = RouterUtil.pop({routeConfig});
    this.setState({routeConfig});
  }

  postPop(e) {
    console.log('postPop');
    let routeConfig = RouterUtil.postPop(this.state.routeConfig);
    this.setState({routeConfig});
  }

  postPush(e) {
    let routeConfig = RouterUtil.postPush(this.state.routeConfig);

    this.setState({routeConfig});
  }

  pushPage() {
    let data = {
      component: MyPage2,
      props: {
        key: 'examplesA',
        text: 'Page 2',
        duration: 2,
        delay: 0.1,
        pushPage: this.pushPage,
        popPage: this.popPage
      }
    };

    let options = {
      /* animation: 'slide',
      animationOptions: {
        duration: 0.2,
        delay: 0.4,
        timing: 'ease-in'
        }
      */
    };

    let routeConfig = RouterUtil.push({
      routeConfig: this.state.routeConfig,
      data,
      options
    });

    this.setState({routeConfig});
  }

  pushPage2() {
    console.log('push page 2');

    let data = {
      component: MyPage2,
      props: {
        key: 'examples2',
        text: 'Page 2',
        pushPage: this.pushPage,
        popPage: this.popPage
      }
    };

    let routeConfig = RouterUtil.push({
      routeConfig: this.state.routeConfig,
      data: data
    });

    let config = RouterUtil.push({
      routeConfig,
      data: {
        component: MyPage2,
        props: {
          key: 'examples3',
          text: 'Page 3',
          pushPage: this.pushPage,
          popPage: this.popPage,
          popPage2: this.popPage2
        }
      }
    });

    console.log('config', config);
    this.setState({routeConfig: config});
  }

  render() {
    return (
      <RouterNavigator
        renderPage={this.renderPage}
        onPrePush={e => console.log('prepush', e)}
        onPostPush={e => this.postPush(e)}
        onPrePop={e => console.log('prepop', e)}
        onPostPop={e => this.postPop(e)}
        routeConfig={this.state.routeConfig}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
