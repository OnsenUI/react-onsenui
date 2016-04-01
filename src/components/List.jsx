import React from 'react';

class List extends React.Component {
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

List.defaultProps = {
  renderHeader: () => null,
  renderFooter: () => null
};

List.propTypes = {
  dataSource: React.PropTypes.array.isRequired
};

export default List;
