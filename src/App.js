import React from "react";
import Login from "./components/login";
import {Switch, Route } from "react-router-dom"
import { Layout, Menu } from 'antd';
import './App.css';

const App = () => {
  return (
    <div>
    <Layout.Header style={{ width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Dashboard</Menu.Item>
      </Menu>
    </Layout.Header>

      <Switch>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
