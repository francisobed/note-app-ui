import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from 'views/Auth/Login'
import Register from 'views/Auth/Register'
import ForgetPassword from 'views/Auth/ForgetPassword'
import Welcome from 'views/Welcome'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" component={Welcome} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/forgetpassword" component={ForgetPassword}/>
        </Switch>
    </Router>
   
  );
}

export default App;
