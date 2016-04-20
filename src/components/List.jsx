import React from 'react';
import BasicComponent from './BasicComponent.jsx';

class List extends BasicComponent {
  render() {
    var pages = this.props.dataSource.map((data, idx) => this.props.renderRow(data, idx));

    return (
      <ons-list {...this.props} ref='list'>
        {this.props.renderHeader()}
        {pages}
        {this.props.renderFooter()}
      </ons-list>
    );
  }
}

List.propTypes = {
  modifier: React.PropTypes.string,
  dataSource: React.PropTypes.array.isRequired,
  renderHeader: React.PropTypes.func,
  renderFooter: React.PropTypes.func
};

List.defaultProps = {
  renderHeader: () => null,
  renderFooter: () => null
};

export default List;
