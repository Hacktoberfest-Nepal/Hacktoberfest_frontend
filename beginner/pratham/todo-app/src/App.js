import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Grid, Label } from 'semantic-ui-react'
import { Todo } from './Todo';
import { TodoModel } from './TodoModel';

function App() {

  const [ todos, setTodos ] = useState([
  {
    id: 1,
    task: "Double click task to edit",
    completed: false
  },
  {
    id: 2,
    task: "Add new tasks",
    completed: true
  }])

  const [ toggleModel, setToggleModel ] = useState(false)

  const deleteTask = ( id ) => {
    setTodos(todos.filter(todo=>todo.id !== id))
  }

  const completeTask = ( id ) => {
    setTodos(todos.map(todo=>{
      if ( todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    }))
  }

  const editTask = ( id, value ) => {
    setTodos(todos.map(todo=>{
      if ( todo.id === id) {
        todo.task = value;
      }
      return todo;
    }))
  }

  const addTodo = (task) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        task,
        completed:false,
      }
    ])
    setToggleModel(false)
  }


  return (
    <div className="App">
      <Container>
        <header>
          <h1 className="Header">Todo App</h1>
        </header>
        <main>
          <Grid>
            <Grid.Column mobile={6} tablet={10} computer={12} verticalAlign="middle">
              <Button onClick={()=>setToggleModel(true)} size={"mini"}>Add Todo</Button>
            </Grid.Column>
            <Grid.Column mobile={10} tablet={6} computer={4} verticalAlign="middle">
              <Button as="div" labelPosition='right' size={"mini"}>
                  <Button as="a" color='green' size={"mini"}>
                    Completed
                  </Button>
                <Label as='a' basic color='green' pointing='left'>
                  {todos.filter(({completed})=>completed===true).length}
                </Label>
              </Button>
              <Button as="div" labelPosition='right' size={"mini"}>
                  <Button as="a" color='red' size={"mini"}>
                    Tasks
                  </Button>
                <Label as='a' basic color='red' pointing='left'>
                  {todos.length}
                </Label>
              </Button>
            </Grid.Column>
          </Grid>

          {
            todos.length > 0 ?
            <>
              { todos.map(todo => (
                <Todo key={todo.id} todo={todo} editTask={editTask} deleteTask={deleteTask} completeTask={completeTask}></Todo>
              )) }
            </> : <>No Tasks Left. Add A New One???</>
          }
        </main>
        <TodoModel toggleModel={toggleModel} setToggleModel={setToggleModel} addTodo={addTodo}/>
      </Container>
    </div>
  );
}

export default App;
