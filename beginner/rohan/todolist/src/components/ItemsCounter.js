import React from 'react';

export const ItemsCounter = (props) => {
  return (
    <div className='itemCounterInfo'>
      <span className={props.tasks.length > 4 ? 'danger' : 'nodanger'}>
        {' '}
        {props.tasks.length}{' '}
      </span>{' '}
      ToDos Remaining{' '}
    </div>
  );
};
