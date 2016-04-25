import React from 'react';
import BasicComponent from './BasicComponent.jsx';
import Util from './Util.js';

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
    node.setActiveTab(this.state.activeIndex);
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

  setActiveTab(index, options) {
    this.refs.tabbar.setActiveTab(index, options);
  }

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
  initialIndex: React.PropTypes.number.isRequired,
  renderTabs: React.PropTypes.func.isRequired,
  position: React.PropTypes.string,
  animation: React.PropTypes.oneOf(['none', 'slide', 'fade']),
  animationOptions: React.PropTypes.object,
  onPreChange: React.PropTypes.func,
  onPostChange: React.PropTypes.func,
  onReactive: React.PropTypes.func
};

Tabbar.defaultProps = {
  initialIndex: 0
};

export default Tabbar;
