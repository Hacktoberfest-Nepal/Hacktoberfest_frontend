import React, { useContext } from 'react';
import { ItemsContext } from '../App'

function TodoItem(props) {
    const context = useContext(ItemsContext)
  
    function removeItem() {
      let newItemList = context.items.filter(i => i !== props.value)
      context.setItems(newItemList)
      localStorage.setItem('list', newItemList)
    }
  
    return (
      <li style={{ textAlign: "left", marginBottom: '2px' }}>
        <div style={{ display: "flex" }}>
          <label style={{ width: '190px', wordBreak: "break-all" }}>{props.value}</label>{' '}
          <button onClick={() => removeItem()}>X</button>
        </div>
      </li>
    )
}

export default TodoItem