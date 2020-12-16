import React from "react";
import { getUser } from "../services/auth";
import { Layout, Menu } from 'antd';

const NavBar = () => {
    const userEmail = getUser()

    const handleLogout = () =>{
        localStorage.removeItem("user");
        window.location.reload();
    }

    return(
        <Layout.Header style={{ width: '100%' }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          {userEmail && <React.Fragment><Menu.Item key="2" style={{float: 'right'}}>{userEmail}</Menu.Item> 
          <Menu.Item key="3" style={{float: 'right'}} onClick={handleLogout}>Logout</Menu.Item></React.Fragment>
          }
        </Menu>
      </Layout.Header>
      )
}

export default NavBar;