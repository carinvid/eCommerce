import React, {useState} from 'react'
import {Menu, menu} from 'antd'
import { AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined} from '@ant-design/icons';


const { SubMenu } = Menu;

const Header = () => {
    const [ current, setCurrent] = useState('home')

    const handleClick = (e) => {
      setCurrent(e.key)
    }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          Home
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
          
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
                   
        </SubMenu>
        <Menu.Item key="login" icon={<UserOutlined />} class="d-flex justify-content-end">
          Login
        </Menu.Item>
        
        <Menu.Item key="register" icon={<UserAddOutlined />} class="d-flex justify-content-end">
          Register
        </Menu.Item>
        
        
      </Menu>
    )
}

export default Header
