import React from 'react';
import { Info } from './Info';
export const CompletedTasks = (props) => {
  let DisplayContent = '';
  if (props.task.length !== 0) {
    DisplayContent = (
      <ul className='list-unstyled'>
        {props.task.map((item) => {
          return (
            <li key={item.index} className='ui-state-default'>
              <span className='completed'>{item.content}</span>
              <img
                src={require('./../images/dustbin.svg')}
                alt='dustbin'
                onClick={(e) => props.deleteTask(e)}
                id={item.index}
                title='Remove from Completed Tasks.'
              />
            </li>
          );
        })}
      </ul>
    );
  } else {
    DisplayContent = <Info>No Tasks completed Yet.</Info>;
  }
  return (
    <div>
      <Info>Completed Tasks show up here:</Info>
      {DisplayContent}
    </div>
  );
};
