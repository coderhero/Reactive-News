import React from 'react';
import {Menu, Button} from 'antd';
import LoginRegisterModal from './LoginRegisterModal'

export default function NavLoginRegister(props) {
    return (
      <div>
        <Menu>
          <Menu.Item key="login">
            <Button type='primary'
                    onClick={props.handleUserLogIn}
              >Log In</Button>
            <Button>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </div>
    )

}
