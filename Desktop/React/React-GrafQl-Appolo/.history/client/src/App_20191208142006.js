import React from 'react'
import {RouterBrowser as Router , Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css'


function App() {
  return (
    <Router>
       <Route exact path='/' component={home}/>
       <Route exact path='/login' component={login}/>
       <Route exact path='/register' component={register}/>
    </Router>
  );
}

export default App;
