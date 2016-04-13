import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';

export default class extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    this.node = ReactDOM.findDOMNode(this);
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.node._compile();
  }

  render() {
    return (
      <ons-list-item {...this.props}>
        {this.props.children}
      </ons-list-item>
    );
  }
};
