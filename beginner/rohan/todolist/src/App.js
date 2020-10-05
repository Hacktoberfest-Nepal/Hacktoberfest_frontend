import React, { useEffect, useState } from 'react';
import { AddTask } from './components/AddTask';
import { CompletedTasks } from './components/CompletedTasks';
import { RemainingTasks } from './components/RemainingTasks';
import { Header } from './components/Header';
import { Filter } from './components/Filter';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [indexCount, setIndexCount] = useState(0);
  const [allFilterToggler, setAllFilterToggler] = useState(true);
  const [remainingFilterToggler, setRemainingFilterToggler] = useState(false);
  const [completedFilterToggler, setCompleteFilterToggler] = useState(false);
  const [userInputValueHolder, setUserInputValueHolder] = useState('');

  // method to update the todolist.
  const updateUserNewTask = (newTask) => {
    let temp = {
      index: indexCount,
      content: newTask,
      completed: false,
    };

    setIndexCount(indexCount + 1);
    setTasks(tasks.concat(temp));
    setUserInputValueHolder('');
    return true;
  };
  // method to delete user task from remaining Tasks.
  const deleteUserTask = (e) => {
    let buttonIndex = parseInt(e.target.id);
    let indexer = tasks.findIndex((x) => x.index === buttonIndex);
    let completedTask = tasks.splice(indexer, 1);

    setTasks(tasks);
    setCompletedTasks(completedTasks.concat(completedTask));
  };

  // method to delete user task from Completed Tasks.
  const deleteCompletedUserTask = (e) => {
    let buttonIndex = parseInt(e.target.id);
    let indexer = completedTasks.findIndex((x) => x.index === buttonIndex);
    completedTasks.splice(indexer, 1);
    setTasks(tasks);
  };
  // Filter Toggler Methods Start.
  const allToggler = () => {
    if (!allFilterToggler) {
      setAllFilterToggler(true);
      setRemainingFilterToggler(false);
      setCompleteFilterToggler(false);
    }
  };

  const remainingToggler = () => {
    if (!remainingFilterToggler) {
      setAllFilterToggler(false);
      setRemainingFilterToggler(true);
      setCompleteFilterToggler(false);
    }
  };

  const completedToggler = () => {
    if (!completedFilterToggler) {
      setAllFilterToggler(false);
      setRemainingFilterToggler(false);
      setCompleteFilterToggler(true);
    }
  };

  const editTask = (x) => {
    console.log(x);
  };
  // Filter Toggler Methods End.

  // Retrieve Data from Local Storage.

  useEffect(() => {
    let remTask = JSON.parse(localStorage.getItem('remainingTasks'));
    let compTask = JSON.parse(localStorage.getItem('completedTasks'));

    if (remTask) {
      setTasks(remTask);
    }

    if (compTask) {
      setCompletedTasks(compTask);
    }
  }, []);

  localStorage.setItem('remainingTasks', JSON.stringify(tasks));
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

  let toggler = '';
  if (allFilterToggler) {
    toggler = (
      <>
        <RemainingTasks
          editTask={(x) => editTask(x)}
          task={tasks}
          deleteTask={(e) => deleteUserTask(e)}
        />{' '}
        <br />
        <CompletedTasks
          task={completedTasks}
          deleteTask={(e) => deleteCompletedUserTask(e)}
        />{' '}
      </>
    );
  }

  if (remainingFilterToggler) {
    toggler = (
      <RemainingTasks
        editTask={editTask}
        task={tasks}
        deleteTask={(e) => deleteUserTask(e)}
      />
    );
  }
  if (completedFilterToggler) {
    toggler = (
      <CompletedTasks
        task={completedTasks}
        deleteTask={(e) => deleteCompletedUserTask(e)}
      />
    );
  }
  return (
    <div className='outerWrapper container col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3'>
      <Header />
      <div className='innerWrapper container'>
        <AddTask
          userValue={userInputValueHolder}
          updateTask={(task) => updateUserNewTask(task)}
        />{' '}
        <br />
        <Filter
          tasks={tasks}
          allValue={allFilterToggler}
          remainingValue={remainingFilterToggler}
          completedValue={completedFilterToggler}
          allToggler={() => allToggler()}
          remainingToggler={() => remainingToggler()}
          completedToggler={() => completedToggler()}
        />{' '}
        {toggler}{' '}
      </div>{' '}
      <p className='footer'>
        {' '}
        Designed with{' '}
        <span
          role='img' //eslint-disable-next-line
        >
          {' '}
          ♥️{' '}
        </span>{' '}
      </p>
    </div>
  );
};

export default App;
