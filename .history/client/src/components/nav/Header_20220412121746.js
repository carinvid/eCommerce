import React, {useState} from 'react'
import {Menu, menu} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;

const Header = () => {
    const [ current, setCurrent] = useState('')

    const handleClick = () => {

    }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Home
        </Menu.Item>
        
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Register">
          <Menu.ItemGroup >
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          
        </SubMenu>
      </Menu>
    )
}

export default Header
