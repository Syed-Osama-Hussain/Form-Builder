import React from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import {Switch, Route, Redirect } from "react-router"
import './App.css';


const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
