import React from 'react';
import './App.css';
import { LoginPage } from './components/login-page/LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HeaderArea } from './components/header/HeaderArea';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' exact component={LoginPage} />
        <Route path='/facebook' component={HeaderArea} />
        <Redirect from='/' to='/login' />
      </Switch>
    </div>
  );
}

export default App;
