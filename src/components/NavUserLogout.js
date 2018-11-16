import React from 'react';
import {Menu, Button, Row} from 'antd';

export default function NavUserLogout(props) {
  return (
    <div className="Nav-user-logout">
          <span className="username">{props.userName}</span>
          <Button type='primary'
                  onClick={props.handleUserLogOut}
            >Log Out</Button>
    </div>
  )
}
