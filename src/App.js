import React from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Login } from './Components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {Register} from './Components/Register';
import { useAuth } from './Context/AuthContext';


function App() {

  const  [Token] =useAuth();
  return (
    <Router>
    
        <html>
          <head></head>
          <body>
            <Switch>
              {Token && <Route exact path="/dashboard">
                <Dashboard />
              </Route>}
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Register/>
              </Route>
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </body>
        </html>
     
    </Router>
  );
}

export default App;
