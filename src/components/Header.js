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
      currentNavTab: this.props.newsCategory, //determine which Tab page is showing
      isToshowModal: false, // determine if to show the Login and Singup modal
    }
    this.menuItemSelect = this.props.menuItemSelect;
    this.handleUserLogOut = this.handleUserLogOut.bind(this);
    this.handleUserLogIn = this.handleUserLogIn.bind(this);
  }

  handleUserLogIn() {
    // use setTimeout to mimic the API call
    setTimeout(
      () => {
        this.setState({
          isLoggedIn: true,
          userName: 'Yan',
        })
      }, 300)
  }

  handleUserLogOut() {
    setTimeout(
      ()=> {this.setState({
          isLoggedIn: false,
        })}, 300)
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
          <Col span={14} className="NavBar">
            <NavBar currentNavTab={this.state.currentNavTab}
                      menuItemSelect={this.menuItemSelect}
                    />
          </Col>
          <Col span={4} className="NavLogin">
            <NavLogin isLoggedIn={this.state.isLoggedIn}
                      handleUserLogOut={this.handleUserLogOut}
                      handleUserLogIn={this.handleUserLogIn}
                      userName={this.state.userName}
                     />
          </Col>

        </Row>
      </header>
    )
  }
}



export default NewsHeader;
