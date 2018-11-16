import React from 'react';
import {Menu, Button} from 'antd';

export default function NavUserLogout(props) {
  return (
    <div>
      <Menu>
        <Menu.Item key="logout">
          <span>{props.userName}</span>
          <Button type='primary'
                  onClick={props.handleUserLogOut}
            >Log Out</Button>
        </Menu.Item>
      </Menu>
    </div>
  )
}
