import React from 'react';
import BasicComponent from './BasicComponent.jsx';

/**
 * @original ons-navigator
 * @category navigation
 * @description
 * [en]This is the main component for navigation. [/en]
 * [jp] どうしよう[/jp]
 * @example
  <Navigator
    renderScene={(route, navigator) =>
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
   *   [en]Rests the current page[/en]
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
   *   [en]Rests the current page[/en]
   *   [ja]どうしよう[/ja]
   */
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

  /**
   * @method pushPage
   * @reset pushPage(route, options = {})
   * @param {Array} [routes]
   *   [en] The routes that the navigator should push to.[/en]
   *   [ja] どうしよう [/ja]
   * @return {Promise}
   *   [en]Promise which resolves to the revealed page.[/en]
   *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en]Pushes a page to the page stack[/en]
   *   [ja]どうしよう[/ja]
   */
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

  /**
   * @method popPage
   * @reset popPage(route, options = {})
   * @return {Promise}
   *   [en]Promise which resolves to the revealed page.[/en]
   *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
   * @description
   *   [en]Pops a page out of the page stack[/en]
   *   [ja]どうしよう[/ja]
   */
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
  /**
   * @name renderScene
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and  creates returns a react componen.[/en]
   *  [jp] どうしよう[/jp]
   */
  renderScene: React.PropTypes.func.isRequired,
  /**
   * @name initialRoutes
   * @type array
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial routes from the navigator,
   *  which will be used to render the initial pages in the renderScene method.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  initialRoutes: React.PropTypes.array,

  /**
   * @name initialRoute
   * @type object
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial route of the navigator,
   *  which will be used to render the initial pages in the
   *  renderScene method.
   *  [/en]
   *  [jp] どうしよう[/jp]
   */
  initialRoute: React.PropTypes.object
};

export default Navigator;
