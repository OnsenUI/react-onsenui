import React from 'react';
import BasicComponent from './BasicComponent.jsx';

/**
 * @original ons-navigator
 * @category navigation
 * @description
 * [en]This is the main component for navigation. [/en]
 * [jp] どうしよう[/jp]
 * @example
 * class App extends React.Component {
 *  renderScene(route, navigator) {
 *     const props = route.props || {};
 *     props.navigator = navigator;
 *     return React.createElement(route.component, route.props);
 *  }
 *
 *  render() {
 *   return (
 *     <Navigator
 *       renderScene={this.renderScene}
 *       initialRoute={{
 *         component: Examples,
 *         props: {
 *           key: 'examples'
 *         }
 *       }}
 *     />
 *   );
 *  }
 *}
 */
class Navigator extends BasicComponent {
  constructor(props) {
    super(props);
    this.pages = [];
    this.state = { };
  }

  update(pages, obj) {
    return new Promise((resolve) => {
      this.setState({}, resolve);
    });
  }

  /**
   * @method resetPage
   * @signature resetPage(route, options = {})
   * @param {Object} [route]
   *   [en] The route that the page should be reset to.[/en]
   *   [ja] どうしよう [/ja]
   * @return {Promise}
   *   [en]Promise which resolves to the revealed page.[/en]
   *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en]Rests the current page[/en]
   *   [ja]どうしよう[/ja]
   */
  resetPage(route, options = {}) {
    return this.resetPageStack([route], options);
  }

  resetPageStack(routes, options = {}) {
    return new Promise((resolve) => {
      var lastRoute = routes[routes.length - 1];
      var newPage = this.props.renderScene(lastRoute, this);
      this.routes.push(lastRoute);

      this.refs.navi._pushPage(options, this.update.bind(this), this.pages, newPage).then(() => {
        this.routes = routes;

        var renderScene = (route) => {
          this.props.renderScene(route, this);
        };

        this.pages = routes.map(renderScene);
        this.update().then(resolve);
      });
    });
  }

  pushPage(route, options = {}) {
    return new Promise((resolve) => {
      var newPage = this.props.renderScene(route, navigator);

      this.routes.push(route);
      this.refs.navi._pushPage(options,
                               this.update.bind(this),
                               this.pages,
                               newPage).then(resolve);
    });
  }

  popPage(options = {}) {
    return this.refs.navi._popPage(options, this.update.bind(this), this.pages)
      .then(
        () => {
          this.routes.pop();
        }
      );
  }

  componentDidMount() {
    this.refs.navi.popPage = this.popPage.bind(this);

    if (this.props.initialRoute && this.props.initialRoutes) {
      throw new Error('In Navigator either initalRoute or initalRoutes can be set');
    }

    if (this.props.initialRoute) {
      this.routes = [this.props.initialRoute];
    } else if (this.props.initialRoutes) {
      this.routes = this.props.initialRoutes;
    } else {
      this.routes = [];
    }

    this.pages = this.routes.map(
      (route) => this.props.renderScene(route, this)
    );
    this.setState({});
  }

  render() {
    // render the last two pages
    for (var index = this.pages.length - 1;
         index >= this.pages.length - 2 && index >= 0; index--) {
      this.pages[index] = this.props.renderScene(this.routes[index], this);
    }

    return (
      <ons-navigator {...this.props} ref='navi'>
        {this.pages}
      </ons-navigator>
    );
  }
}

Navigator.propTypes = {
  renderScene: React.PropTypes.func.isRequired,
  initialRoutes: React.PropTypes.array,
  initialRoute: React.PropTypes.object
};

export default Navigator;
