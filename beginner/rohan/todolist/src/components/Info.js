import React from 'react';
export class Info extends React.Component {
  render() {
    return <p className='info'>{this.props.children}</p>;
  }
}
