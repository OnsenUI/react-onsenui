import React from 'react';
import BasicComponent from './BasicComponent.jsx';
import Util from './Util.js';

/**
 * @original ons-navigator
 * @category navigator
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.  [/en]
 * [jp] どうしよう[/jp]
 * @example
  <Navigator
    renderPage={(route, navigator) =>
     <MyPage
       title={route.title}
       onPop={() => navigator.popPage()}
       />
    }
    initialRoute={{
        title: 'First Page'
    }} />
   }
 }
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
   *   [en]Resets the current page[/en]
   *   [ja]どうしよう[/ja]
   */
  resetPage(route, options = {}) {
    return this.resetPageStack([route], options);
  }

  /**
   * @method resetPageStack
   * @signature resetPageStack(route, options = {})
   * @param {Array} [routes]
   *   [en] The routes that the navigator should be reset to.[/en]
   *   [ja] どうしよう [/ja]
   * @return {Promise}
   *   [en]Promise which resolves to the revealed page.[/en]
   *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en] Resets the navigator to the current page stack[/en]
   *   [ja] どうしよう[/ja]
   */
  resetPageStack(routes, options = {}) {
    if (this.isRunning) {
      return Promise.reject('Navigator is already running animation.');
    }

    return new Promise((resolve) => {
      var lastRoute = routes[routes.length - 1];
      var newPage = this.props.renderPage(lastRoute, this);
      this.routes.push(lastRoute);

      this.refs.navi._pushPage(options, this.update.bind(this), this.pages, newPage).then(() => {
        this.routes = routes;

        var renderPage = (route) => {
          this.props.renderPage(route, this);
        };

        this.pages = routes.map(renderPage);
        this.update().then(resolve);
      });
    });
  }

  /**
   * @method pushPage
   * @signature pushPage(route, options = {})
   * @param {Array} [routes]
   *   [en] The routes that the navigator should push to.[/en]
   *   [ja] どうしよう [/ja]
   * @return {Promise}
   *   [en] Promise which resolves to the revealed page.[/en]
   *   [ja] 明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en] Pushes a page to the page stack[/en]
   *   [ja] どうしよう[/ja]
   */
  pushPage(route, options = {}) {
    if (this.refs.navi._isRunning) {
      return Promise.reject('Navigator is already running animation.');
    }

    return new Promise((resolve) => {
      var newPage = this.props.renderPage(route, navigator);

      this.routes.push(route);
      this.refs.navi._pushPage(options,
                               this.update.bind(this),
                               this.pages,
                               newPage).then(resolve)
                               .catch((error) => {
                                 this.routes.pop();
                                 this.pages.pop();
                                 throw error;
                               });
    });
  }

  get isRunning() {
    return this.refs.navi._isRunning;
  }

  /**
   * @method popPage
   * @signature popPage(route, options = {})
   * @return {Promise}
   *   [en] Promise which resolves to the revealed page.[/en]
   *   [ja] 明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en] Pops a page out of the page stack[/en]
   *   [ja] どうしよう[/ja]
   */
  popPage(options = {}) {
    if (this.isRunning) {
      return Promise.reject('Navigator is already running animation.');
    }

    return this.refs.navi._popPage(options, this.update.bind(this), this.pages)
      .then(
        () => {
          this.routes.pop();
        }
      );
  }

  componentDidMount() {
    this.refs.navi.popPage = this.popPage.bind(this);

    if (this.props.initialRoute && this.props.initialRouteStack) {
      throw new Error('In Navigator either initalRoute or initalRoutes can be set');
    }

    if (this.props.initialRoute) {
      this.routes = [this.props.initialRoute];
    } else if (this.props.initialRouteStack) {
      this.routes = this.props.initialRouteStack;
    } else {
      this.routes = [];
    }

    this.pages = this.routes.map(
      (route) => this.props.renderPage(route, this)
    );
    this.setState({});
  }

  render() {
    // render the last two pages
    for (var index = this.pages.length - 1;
         index >= this.pages.length - 2 && index >= 0; index--) {
      this.pages[index] = this.props.renderPage(this.routes[index], this);
    }

    var {...others} = this.props;
    Util.convert(others, 'animationOptions', {fun: Util.animationOptionsConverter, newName: 'animation-options'});

    return (
      <ons-navigator {...others} ref='navi'>
        {this.pages}
      </ons-navigator>
    );
  }
}

Navigator.propTypes = {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and  creates returns a react componen.[/en]
   *  [jp] どうしよう[/jp]
   */
  renderPage: React.PropTypes.func.isRequired,
  /**
   * @name initialRouteStack
   * @type array
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial routes from the navigator,
   *  which will be used to render the initial pages in the renderPage method.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  initialRouteStack: React.PropTypes.array,

  /**
   * @name initialRoute
   * @type object
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial route of the navigator,
   *  which will be used to render the initial pages in the
   *  renderPage method.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  initialRoute: React.PropTypes.object,

  /**
   * @property animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   *   [/en]
   */
  animation: React.PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [jp] [/jp]
   */
  animationOptions: React.PropTypes.object
};

export default Navigator;
