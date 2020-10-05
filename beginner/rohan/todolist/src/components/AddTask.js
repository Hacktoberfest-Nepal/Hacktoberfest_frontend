import React, { useState } from 'react';

export const AddTask = ({ userValue, updateTask }) => {
  const [inputValue, setInputValue] = useState(userValue);
  // onChangeHandler for the Input Field.
  const getUserInput = (event) => {
    setInputValue(event.target.value);
  };

  const verifyEntry = () => {
    if (inputValue !== '') {
      if (updateTask(inputValue)) {
        setInputValue('');
      }
    } else {
      alert('Task cannot be empty.');
    }
  };
  return (
    <div className='addTask'>
      <input
        type='text'
        placeholder='Add new task.'
        value={inputValue}
        onChange={(event) => getUserInput(event)}
      />{' '}
      <button onClick={() => verifyEntry()} title='Click to Add.'>
        {' '}
        +{' '}
      </button>{' '}
    </div>
  );
};
