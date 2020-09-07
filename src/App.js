import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'
import ForgotPassword from 'views/Auth/ForgotPassword'
import Welcome from 'views/Welcome'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Welcome} exact/>
          <Route path="/auth/login" component={Login}/>
          <Route path="/auth/register" component={Register}/>
          <Route path="/auth/forgotpassword" component={ForgotPassword}/>
        </Switch>
    </Router>
   
  );
}

export default App;
