import React from "react";
import { getUser } from "../services/auth";
import { Layout, Menu } from 'antd';

const NavBar = () => {
    const userEmail = getUser()
    const handleLogout = () =>{
        localStorage.removeItem("user");
        window.location = "/login";
    }

    return(
        <Layout.Header style={{ width: '100%',backgroundColor:"white" }}>
        <Menu mode="horizontal" >
         <Menu.Item key="1">Dashboard</Menu.Item>
        {userEmail && <Menu.Item key="2" style={{float: 'right'}}>{userEmail}</Menu.Item>} 
        {userEmail && <Menu.Item key="3" style={{float: 'right'}} onClick={handleLogout}>Logout</Menu.Item>}
        </Menu>
      </Layout.Header>
      )
}

export default NavBar;