import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class LazyList extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var self = this;
    CustomElements.upgrade(this.refs.lazyRepeat);

    this.refs.lazyRepeat.delegate = {
      calculateItemHeight: function(index) {
        return self.props.calculateItemHeight(index);
      },
      _render: function(items, newHeight) {
        var createElement = function({index: index, top: top}) {
          return self.props.renderRow(index);
        };

        var el = items.map(createElement);
        self.setState({children: el, height: newHeight},
                      () => {
                        var list = this.refs.list;
                        // ignore i=0 <lazy repat
                        for (var i = 1; i < list.children.length; i++) {
                          list.children[i].style.position = 'absolute';
                          list.children[i].style.top = items[i - 1].top + 'px';
                          list.children[i].style.left = '0px';
                          list.children[i].style.right = '0px';
                        }
                      });
      }.bind(this),
      countItems: function() {
        return self.props.length;
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {children: []};
  }

  render() {
    return (
      <ons-list {...this.props} ref='list'
        class='list' style={{position: 'relative', height: this.state.height}}
        >
        <ons-lazy-repeat ref='lazyRepeat' />
        {this.state.children}
       </ons-list>
    );
  }
}

LazyList.propTypes = {
  length: React.PropTypes.number.isRequired,
  renderRow: React.PropTypes.func.isRequired,
  calculateItemHeight: React.PropTypes.func.isRequired,
  modifier: React.PropTypes.string
};

export default LazyList;
