import React from 'react';

export class ItemsCounter extends React.Component {
  render() {
    return (
      <div className='itemCounterInfo'>
        <span className={this.props.tasks.length > 4 ? 'danger' : 'nodanger'}>
          {this.props.tasks.length}
        </span>{' '}
        ToDos Remaining
      </div>
    );
  }
}
