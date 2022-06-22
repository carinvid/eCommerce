import React, {useState} from 'react'
import {Menu, menu} from 'antd'
import { AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined} from '@ant-design/icons';


const { SubMenu, Item } = Menu;

const Header = () => {
    const [ current, setCurrent] = useState('home')

    const handleClick = (e) => {
      setCurrent(e.key)
    }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<AppstoreOutlined />}>
          Home
        </Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
          
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
                   
        </SubMenu>
        <div className="float-right">
        <Item key="login" icon={<UserOutlined />} >
          Login
        </Item>
        
        <Item key="register" icon={<UserAddOutlined />} >
          Register
        </Item>
        </div>
        
      </Menu>
    )
}

export default Header
