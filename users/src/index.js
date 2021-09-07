import React from 'react';
import ReactDOM from 'react-dom';
import Client from './App';
import OneUser from './OneUser'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    
     <Router>
     <Client />
       <Switch>
          <Route exact path="/OneUser" >
          <OneUser />   
          </Route>
       </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

