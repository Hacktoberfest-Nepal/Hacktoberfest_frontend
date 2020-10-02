import React from 'react';
import { AddTask } from './components/AddTask';
import { CompletedTasks } from './components/CompletedTasks';
import { RemainingTasks } from './components/RemainingTasks';
import { Header } from './components/Header';
import { Filter } from './components/Filter';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      completedTasks: [],
      indexCount: 0,
      allFilterToggler: true,
      remainingFilterToggler: false,
      completedFilterToggler: false,
      userInputValueHolder: '',
    };
  }

  // method to update the todolist.
  updateUserNewTask(newTask, inputFieldRef) {
    let temp = {
      index: this.state.indexCount,
      content: newTask,
      completed: false,
    };
    this.setState((prevState) => {
      return {
        indexCount: this.state.indexCount + 1,
        tasks: prevState.tasks.concat(temp),
        userInputValueHolder: '',
      };
    });
    inputFieldRef.current.value = '';
    return true;
  }
  // method to delete user task from remaining Tasks.
  deleteUserTask(e) {
    let buttonIndex = parseInt(e.target.id);
    let indexer = this.state.tasks.findIndex((x) => x.index === buttonIndex);
    let completedTask = this.state.tasks.splice(indexer, 1);
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks,
        completedTasks: prevState.completedTasks.concat(completedTask),
      };
    });
  }

  // method to delete user task from Completed Tasks.
  deleteCompletedUserTask(e) {
    let buttonIndex = parseInt(e.target.id);
    let indexer = this.state.completedTasks.findIndex(
      (x) => x.index === buttonIndex
    );
    this.state.completedTasks.splice(indexer, 1);
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks,
      };
    });
  }
  // Filter Toggler Methods Start.
  allToggler() {
    if (!this.state.allFilterToggler) {
      this.setState({
        allFilterToggler: true,
        remainingFilterToggler: false,
        completedFilterToggler: false,
      });
    }
  }

  remainingToggler() {
    if (!this.state.remainingFilterToggler) {
      this.setState({
        allFilterToggler: false,
        remainingFilterToggler: true,
        completedFilterToggler: false,
      });
    }
  }

  completedToggler() {
    if (!this.state.completedFilterToggler) {
      this.setState({
        allFilterToggler: false,
        remainingFilterToggler: false,
        completedFilterToggler: true,
      });
    }
  }
  // Filter Toggler Methods End.

  // Retrieve Data from Local Storage.
  componentWillMount() {
    let remTask = JSON.parse(localStorage.getItem('remainingTasks'));
    let compTask = JSON.parse(localStorage.getItem('completedTasks'));

    if (remTask) {
      this.setState({
        tasks: remTask,
      });
    }

    if (compTask) {
      this.setState({
        completedTasks: compTask,
      });
    }
  }

  render() {
    localStorage.setItem('remainingTasks', JSON.stringify(this.state.tasks));
    localStorage.setItem(
      'completedTasks',
      JSON.stringify(this.state.completedTasks)
    );

    let toggler = '';
    if (this.state.allFilterToggler) {
      toggler = (
        <React.Fragment>
          <RemainingTasks
            editTask={(x) => this.editTask(x)}
            task={this.state.tasks}
            deleteTask={(e) => this.deleteUserTask(e)}
          />
          <br />
          <CompletedTasks
            task={this.state.completedTasks}
            deleteTask={(e) => this.deleteCompletedUserTask(e)}
          />
        </React.Fragment>
      );
    }
    if (this.state.remainingFilterToggler) {
      toggler = (
        <RemainingTasks
          editTask={this.editTask}
          task={this.state.tasks}
          deleteTask={(e) => this.deleteUserTask(e)}
        />
      );
    }
    if (this.state.completedFilterToggler) {
      toggler = (
        <CompletedTasks
          task={this.state.completedTasks}
          deleteTask={(e) => this.deleteCompletedUserTask(e)}
        />
      );
    }
    return (
      <div className='outerWrapper container col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3'>
        <Header />
        <div className='innerWrapper container'>
          <AddTask
            updateTask={(task, inputFieldRef) =>
              this.updateUserNewTask(task, inputFieldRef)
            }
            userValue={this.state.userInputValueHolder}
          />
          <br />
          <Filter
            tasks={this.state.tasks}
            allValue={this.state.allFilterToggler}
            remainingValue={this.state.remainingFilterToggler}
            completedValue={this.state.completedFilterToggler}
            allToggler={() => this.allToggler()}
            remainingToggler={() => this.remainingToggler()}
            completedToggler={() => this.completedToggler()}
          />
          {toggler}
        </div>
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
  }
}
