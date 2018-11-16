import React from 'react';
import {Menu, Button} from 'antd';


export default function NavLogin(props) {
  const logOutComponent = <Menu.Item key="logout">
    <span>{props.userName}</span>
    <Button type='primary'
            onClick={props.handleUserLogOut}
      >Log Out</Button>
  </Menu.Item>
  const logInComponent = <Menu.Item key="login">
    <Button type='primary'
            onClick={props.handleUserLogIn}
      >Log In</Button>
    <Button>Sign Up</Button>
  </Menu.Item>
    return (
      <div>
        <Menu>
          {
          props.isLoggedIn ? logOutComponent : logInComponent
        }
        </Menu>
      </div>
    )

}
