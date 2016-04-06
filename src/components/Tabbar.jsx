import React from 'react';

class Tabbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.initialIndex || 0
    };
  }

  componentDidMount() {
    const node = this.refs.tabbar;
    CustomElements.upgrade(node);
    node.setActiveTab(this.state.activeIndex);
    node.addEventListener('prechange', this.handleChange);
  }

  componentWillUnmount() {
    this.refs.tabbar.removeEventListener('prechange', this.handleChange);
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

    return (
      <ons-tabbar {...this.props} ref='tabbar' activeIndex={this.state.activeIndex} _compiled='true'>
        <div no-status-bar-fill className='ons-tab-bar__content tab-bar__content'>
          {tabs.map((tab) => tab.content)}
        </div>
        <div className='tab-bar ons-tab-bar__footer ons-tabbar-inner'>
          {tabs.map((tab) => tab.tab)}
        </div>
      </ons-tabbar>
    );
  }
};

Tabbar.propTypes = {
  initialIndex: React.PropTypes.number.isRequired,
  renderTabs: React.PropTypes.func.isRequired
};

Tabbar.defaultProps = {
  initialIndex: 0
};

export {Tabbar};
