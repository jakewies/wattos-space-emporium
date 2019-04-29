import React from 'react';
import { createPortal } from 'react-dom';

export class Portal extends React.Component {
  static defaultProps = {
    selector: '#modal'
  };

  componentDidMount() {
    this.element = document.querySelector(this.props.selector);
    this.forceUpdate();
  }

  render() {
    if (this.element === undefined) {
      return null;
    }

    return createPortal(this.props.children, this.element);
  }
}

export default Portal;
