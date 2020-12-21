import React from 'react';
import { Layout, Menu, Button} from 'antd';
const { Sider } = Layout;
import { ItemTypes } from '../Constants';
import { useDrag } from 'react-dnd'

const SideBar = () => {

    const [{isDraggingSelect}, dragSelect] = useDrag({
        item: { type: ItemTypes.SELECT },
        collect: monitor => ({
        isDragging: !!monitor.isDragging(),
        }),
  })

    const [{isDraggingText}, dragText] = useDrag({
        item: { type: ItemTypes.TEXT },
        collect: monitor => ({
        isDragging: !!monitor.isDragging(),
        }),
    })

    const [{isDraggingCheckbox}, dragCheckbox] = useDrag({
        item: { type: ItemTypes.CHECKBOX },
        collect: monitor => ({
        isDragging: !!monitor.isDragging(),
        }),
    })


    return(
        <Sider className="site-layout-background" id="sidebar" style={{marginTop:"50px"}}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['none']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item ><h2 style={{cursor:"default"}}>Fields</h2></Menu.Item>
            <Menu.Item key="2"><Button ref={dragSelect} style={{opacity: isDraggingSelect ? 0.5 : 1,cursor: 'move'}}>Dropdown</Button></Menu.Item>
            <Menu.Item key="3"><Button ref={dragText} style={{opacity: isDraggingText ? 0.5 : 1,cursor: 'move',width:"97.6px"}}>Text</Button></Menu.Item>
            <Menu.Item key="4"><Button ref={dragCheckbox} style={{opacity: isDraggingCheckbox ? 0.5 : 1,cursor: 'move',width:"97.6px"}}>Checkbox</Button></Menu.Item>
        </Menu>
      </Sider>
    )
}

export default SideBar;