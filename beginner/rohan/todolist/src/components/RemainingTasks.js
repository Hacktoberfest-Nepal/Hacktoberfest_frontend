import React from 'react';
import { ItemsCounter } from './ItemsCounter';
import { Info } from './Info';

export const RemainingTasks = (props) => {
  let DisplayContent = '';
  if (props.task.length !== 0) {
    DisplayContent = (
      <ul className='list-unstyled'>
        {props.task.map((item) => {
          return (
            <li key={item.index} className='ui-state-default'>
              <span className='remaining'>{item.content}</span>
              <img
                src={require('./../images/check-mark-button.svg')}
                alt='check-mark-button'
                onClick={(e) => props.deleteTask(e)}
                id={item.index}
                title='Add to Completed Tasks.'
              />
            </li>
          );
        })}
      </ul>
    );
  } else {
    DisplayContent = <Info>No Tasks to be done.</Info>;
  }
  return (
    <div>
      <ItemsCounter tasks={props.task} />
      {DisplayContent}
    </div>
  );
};
