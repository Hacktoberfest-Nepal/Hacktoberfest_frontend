import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

export const ItemsContext = createContext([])
const listFromStorage = localStorage.getItem('list') || []

function App() {
  const [items, setItems] = useState(listFromStorage.length ? listFromStorage.split(',') : [])
  const [newItem, setNewItem] = useState('')
  const [error, setError] = useState('')

  function reset() {
    setItems([])
    localStorage.removeItem('list')
  }

  function addNewItem() {    
    if (!items.includes(newItem)) {
      let newItemList = items.concat(newItem)
      setItems(newItemList)
      localStorage.setItem('list', newItemList)
      setNewItem('')
    } else {
      setError('Duplicated')
    }
  }

  return (
    <ItemsContext.Provider value={{items, setItems}} >
      <div className="App">
        <header>
          <img className='App-logo' src={logo} alt='logo'></img>
          <h1>Todo App</h1>
          <h5 style={{ fontStyle: "italic" }}>by Jonas</h5>
        </header>
        <form >
          <label htmlFor='inputText'>
            Add something in to-do list
            <input htmlFor='inputText' autoFocus={true} type='text' value={newItem} onChange={(e) => { setError(''); setNewItem(e.target.value); }}></input>
          </label>
          <button className='add-button' type='submit' onClick={(e) => { e.preventDefault(); addNewItem(); }} disabled={!newItem}>Add</button>
          <br/>
          { error && <label style={{color: 'red'}}>{error}</label>}
        </form>
        <Todo todoList={items}></Todo>
        { items.length !== 0 && <button onClick={() => reset()}>Reset?</button>}
      </div>
    </ItemsContext.Provider>
  );
}

export default App;
