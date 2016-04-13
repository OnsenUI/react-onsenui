import ReactDOM from 'react-dom';
import BasicComponent from './BasicComponent.jsx';

class PullHook extends BasicComponent {
  componentDidMount() {
    super.componentDidMount();
    var node = ReactDOM.findDOMNode(this);
    node.addEventListener('changestate', this.props.onChange);
    CustomElements.upgrade(this.refs.pullHook);
    this.refs.pullHook.setActionCallback(this.props.onLoad);
  }

  componentWillUnmount() {
    var node = ReactDOM.findDOMNode(this);
    node.removeEventListener('changestate', this.props.onChange);
  }

  render() {
    return <ons-pull-hook ref='pullHook' {...this.props} />;
  }
}

export default PullHook;
