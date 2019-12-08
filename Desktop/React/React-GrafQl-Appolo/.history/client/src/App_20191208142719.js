import React from 'react'
import {RouterBrowser as Router , Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

import Home from './pages/home'
import Register from './pages/register'
import Login from './pages/Login'

function App() {
  return (
    <Router>
       <Route exact path='/' component={Home}/>
       <Route exact path='/login' component={Login}/>
       <Route exact path='/register' component={Register}/>
    </Router>
  );
}

export default App;
