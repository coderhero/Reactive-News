import React from 'react';
import {Menu, Icon, Button} from 'antd';


export default function NavLogin(props) {
  // const logOutComponent = <Menu.Item>Yes</Menu.Item>
  const logOutComponent = <Menu.Item key="logout"><Button>Log Out</Button></Menu.Item>
  const logInComponent = <Menu.Item key="login">
    <Button>Log In</Button>
    <Button>Sign Up</Button>
</Menu.Item>
    return (
      <div>
        {/* {props.isLoggedIn ? <Menu.Item key="logout">
          <span>{props.userName}
          </span>
          <Button>LogOut</Button>
        </Menu.Item> :
        <Menu.Item>
          <Icon type="appstore" /> Log In/Sign Up
        </Menu.Item> */}
        <Menu>
          {
          // props.isLoggedIn ? logOutComponent : logInComponent
          props.isLoggedIn ? logOutComponent : logInComponent
        }
        </Menu>
      </div>
    )

}
