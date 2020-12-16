import React from "react";
import Login from "./components/login";
import NavBar from "./components/navbar";
import {Switch, Route } from "react-router-dom"
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
