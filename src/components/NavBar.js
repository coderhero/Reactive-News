import React from 'react';
import { Menu } from 'antd';

export default function NavBar(props) {
  return (
    <div>
      <Menu mode="horizontal"
            onClick={props.menuItemSelect}>
        {/* <MenuItem key="breakingNews"></MenuItem> */}

      </Menu>
    </div>
  )
}
