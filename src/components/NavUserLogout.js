import React from 'react';
import {Menu, Button, Row} from 'antd';
import PropTypes from 'prop-types';

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
NavUserLogout.PropTypes = {
  userName: PropTypes.string.isRequired
}
