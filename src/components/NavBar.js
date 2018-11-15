import React from 'react';
import { Menu, Icon } from 'antd';


export default function NavBar(props) {
  return (
    <div>
      <Menu mode="horizontal"
            onClick={props.menuItemSelect}>
        <Menu.Item key="breakingNews">
            <Icon type="heart" />Breaking News
        </Menu.Item>
        <Menu.Item key="technology">
          <Icon type="robot" />Technology
        </Menu.Item>
        <Menu.Item key='politics'>
          <Icon type='read' />Politics
        </Menu.Item>
        <Menu.Item key="sports">
          <Icon type="file-search" />Sports
        </Menu.Item>
        <Menu.Item key='economy'>
          <Icon type="fund" />Economy
        </Menu.Item>
        <Menu.Item key='real estate'>
          <Icon type="home" />Real Estate
        </Menu.Item>
      </Menu>
    </div>
  )
}
