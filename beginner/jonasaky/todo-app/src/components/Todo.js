import React from 'react';
import TodoItem from './TodoItem'

function Todo(props) {  
    return (
      <ol>
        {
          props.todoList.map(i => {
            return (<TodoItem key={i} value={i}></TodoItem>)
          })
        }
      </ol>
    )
}

export default Todo