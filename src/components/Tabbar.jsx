import React from 'react';
import BasicComponent from './BasicComponent.jsx';
import Util from './Util.js';

/**
 * @original ons-tabbar
 * @category tabbar
 * @tutorial react/Reference/tabbar
 * @description
 * [en] Component to display a tabbar on either the top or the bottom of a page.
 * To define the tabs and the content the property renderTabs need to be implemented, that returns an array of tabs and their content. See the example for specifics. [/en]* [jp][/jp]
 * @example

  <Page>
    <Tabbar
      onPreChange={() => console.log('preChange')}
      onPostChange={() => console.log('postChange')}
      onReactive={() => console.log('postChange')}
      position='bottom'
      renderTabs={(activeIndex, tabbar) => [
        {
          content: <TabPage title="Home" active={activeIndex === 0} tabbar={tabbar} />,
          tab: <Tab label="Home" icon="md-home" />
        },
        {
          content: <TabPage title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
          tab: <Tab label="Settings" icon="md-settings" />
        }]
      }
    />
  </Page>
 */

class Tabbar extends BasicComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex || 0
    };
  }

  componentDidMount() {
    super.componentDidMount();
    const node = this.refs.tabbar;
    CustomElements.upgrade(node);
    node.addEventListener('prechange', this.handleChange.bind(this));
    node.addEventListener('prechange', this.props.onPreChange);
    node.addEventListener('postchange', this.props.onPostChange);
    node.addEventListener('reactive', this.props.onReactive);
  }

  componentWillUnmount() {
    const node = this.refs.tabbar;
    node.removeEventListener('prechange', this.handleChange);
    node.removeEventListener('prechange', this.props.onPreChange);
    node.removeEventListener('postchange', this.props.onPostChange);
    node.removeEventListener('reactive', this.props.onReactive);
  }

  handleChange(event) {
    this.setState({activeIndex: event.index});
  }

  /**
   * @method setActiveTab
   * @signature setActiveTab(index, options)
   * @param {Number} index
   *   [en]Tab index.[/en]
   *   [ja]タブのインデックスを指定します。[/ja]
   * @param {Object} [options]
   *   [en]Parameter object.[/en]
   *   [ja]オプションを指定するオブジェクト。[/ja]
   * @param {Boolean} [options.keepPage]
   *   [en]If true the page will not be changed.[/en]
   *   [ja]タブバーが現在表示しているpageを変えない場合にはtrueを指定します。[/ja]
   * @param {String} [options.animation]
   *   [en]Animation name. Available animations are `"fade"`, `"slide"` and `"none"`.[/en]
   *   [ja]アニメーション名を指定します。`"fade"`、`"slide"`、`"none"`のいずれかを指定できます。[/ja]
   * @description
   *   [en]Show specified tab page. Animations and other options can be specified by the second parameter.[/en]
   *   [ja]指定したインデックスのタブを表示します。アニメーションなどのオプションを指定できます。[/ja]
   * @return {Promise}
   *   [en]Resolves to the new page element.[/en]
   *   [ja][/ja]
   */
  setActiveTab(index, options) {
    this.refs.tabbar.setActiveTab(index, options);
  }

  /**
   * @method getActiveTabIndex
   * @signature getActiveTabIndex()
   * @return {Number}
   *   [en]The index of the currently active tab.[/en]
   *   [ja]現在アクティブになっているタブのインデックスを返します。[/ja]
   * @description
   *   [en]Returns tab index on current active tab. If active tab is not found, returns -1.[/en]
   *   [ja]現在アクティブになっているタブのインデックスを返します。現在アクティブなタブがない場合には-1を返します。[/ja]
   */
  getActiveTabIndex() {
    return this.refs.tabbar.getActiveTabIndex();
  }

  render() {
    const tabs = this.props.renderTabs(this.state.activeIndex, this);

    var {...others} = this.props;

    ['animation'].forEach((el) => {
      Util.convert(others, el);
    });

    Util.convert(others, 'animationOptions', {fun: Util.animationOptionsConverter, newName: 'animation-options'});

    return (
      <ons-tabbar {...this.props} ref='tabbar' activeIndex={this.state.activeIndex} _compiled='true'>
        <div no-status-bar-fill className={'ons-tab-bar__content tab-bar__content' + (this.props.position === 'top' ? ' tab-bar--top__content' : '')}>
          {tabs.map((tab) => tab.content)}
        </div>
        <div className={'tab-bar ons-tab-bar__footer ons-tabbar-inner' + (this.props.position === 'top' ? ' tab-bar--top' : '')}>
          {tabs.map((tab) => tab.tab)}
        </div>
      </ons-tabbar>
    );
  }
};

Tabbar.propTypes = {
  /**
   * @name initialIndex
   * @type number
   * @description
   *  [en] The index of the first tab to show.[/en]
   *  [jp] [/jp]
   */
  initialIndex: React.PropTypes.number,

  /**
   * @name renderTabs
   * @type function
   * @description
   *  [en] The index of the first tab to show.[/en]
   *  [jp] [/jp]
   */
  renderTabs: React.PropTypes.func.isRequired,

  /**
   * @name position
   * @type string
   * @description
   *  [en] Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (iOS bottom, Android top). [/en]
   *  [jp] [/jp]
   */
  position: React.PropTypes.string,

  /**
   * @name animation
   * @type string
   * @description
   *  [en] Animation name. Available values are `"none"`, `"slide"` and `"fade"`. Default is `"none"`. [/en]
   *  [jp] [/jp]
   */
  animation: React.PropTypes.oneOf(['none', 'slide', 'fade']),

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [jp] [/jp]
   */
  animationOptions: React.PropTypes.object,

  /**
   * @name onPreChange
   * @type function
   * @description
   *  [en]Called just before the tab is changed.[/en]
   *  [jp] [/jp]
   */
  onPreChange: React.PropTypes.func,

  /**
   * @name onPostChange
   * @type function
   * @description
   *  [en]Called just after the tab is changed.[/en]
   *  [jp] [/jp]
   */
  onPostChange: React.PropTypes.func,

  /**
   * @name onReactive
   * @type function
   * @description
   *  [en]Called if the already open tab is tapped again.[/en]
   *  [jp] [/jp]
   */
  onReactive: React.PropTypes.func
};

Tabbar.defaultProps = {
  initialIndex: 0
};

export default Tabbar;
