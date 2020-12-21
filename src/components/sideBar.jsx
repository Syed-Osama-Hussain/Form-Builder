import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';
const { Sider } = Layout;


const SideBar = ({ handleClick }) => {
    return(
        <Sider className="site-layout-background" id="sidebar" style={{marginTop:"50px"}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['none']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item ><h2 style={{cursor:"default"}}>Fields</h2></Menu.Item>
            <Menu.Item key="2"><Button onClick={() => handleClick("select")}>Dropdown</Button></Menu.Item>
            <Menu.Item key="3"><Button onClick={() => handleClick("text")} style={{width:"97.6px"}}>Text</Button></Menu.Item>
            <Menu.Item key="4"><Button onClick={() => handleClick("checkbox")} style={{width:"97.6px"}}>Checkbox</Button></Menu.Item>
        </Menu>
      </Sider>
    )
}

SideBar.propTypes = {
    handleClick: PropTypes.func.isRequired
}


export default SideBar;