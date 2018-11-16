import React from 'react';
import { Button } from 'antd';

export default function NavLoginRegister(props) {
    return (
      <div className="NavLoginRegister">



            <Button type='primary'
                    onClick={props.handleUserLogIn}
              >Log In</Button>

            <Button className="sign-up-btn">Sign Up</Button>



      </div>
    )

}
