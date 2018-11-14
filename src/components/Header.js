import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import logo from '../news-logo.png';
import NavBar from './NavBar';
import NavLogin from './NavLogin';


class NewsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      currentNavTab: 'breakingNews', //determine which Tab page is showing
      isToshowModal: false, // determine if to show the Login and Singup modal
    }
    this.userLogOut = this.userLogOut.bind(this);
    this.menuItemSelect = this.menuItemSelect.bind(this);
  }
  userLogOut() {

  }
  menuItemSelect() {

  }

  render() {
    return (
      <header>
        <Row>
          <Col span={1}></Col>
          <Col span={4}>
            <a className="NewsLogo">
              <img src={logo} alt='News Logo'/>
            </a>
          </Col>
          <Col span={16} className="NavBar">
            <NavBar currentNavTab={this.state.currentNavTab}
                      menuItemSelect={this.menuItemSelect}
                    />
          </Col>
          <Col span={6} className="NavLogin">
            <NavLogin isLoggedIn={this.state.isLoggedIn}
                      userLogOut={this.userLogOut}
                      userName={this.state.userName}
                     />
          </Col>

        </Row>
      </header>
    )
  }
}



export default NewsHeader;
