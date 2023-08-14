// https://gist.github.com/janily/04d7fb0861e053d4679b38743ffc05a7

import { Component } from 'react';

import { createPortal } from 'react-dom';
import style from '!!url-loader!react-day-picker/dist/style.css';

export class Shadow extends Component {
  componentDidMount() {
    if (this.shadowAttached) return;
    this.shadowAttached = true;
    this.shadowRoot = this.node.attachShadow({ mode: this.props.mode });

    // Append a link to the parent element stylesheet
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', style);
    this.shadowRoot.appendChild(link);

    this.forceUpdate();
  }

  render() {
    const { children, ...rest } = this.props;
    return (
      <div {...rest} ref={(node) => (this.node = node)}>
        {this.shadowRoot && createPortal(children, this.shadowRoot)}
      </div>
    );
  }
}
