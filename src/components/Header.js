import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import logo from '../news-logo.png';
import NavBar from './NavBar';
import NavLogin from './NavLogin';
import SearchBox from './SearchBox';

class NewsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      isToshowModal: false, // determine if to show the Login and Singup modal
      searchTerm: '',
    }
    this.menuItemSelect = this.props.menuItemSelect;
    this.handleSearch = this.props.handleSearch;
    this.handleUserInput = this.handleUserInput.bind(this);
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

  handleUserInput(e) {
    console.log(e.target.value)
    this.setState(
      {searchTerm: e.target.value}
    )
  }

  render() {
    return (
      <header style={{marginTop: 5}}>
        <Row type="flex" align="middle">
          <Col span={2}>
            <a className="NewsLogo">
              <img src={logo} alt='News Logo'/>
            </a>
          </Col>
          <Col span={14} className="NavBar">
            <NavBar currentNavTab={this.props.newsCategory}
                      menuItemSelect={this.menuItemSelect}
                    />
          </Col>
          <Col span={4} className="SearchBox">
            <SearchBox handleSearch={this.handleSearch}
                       handleUserInput={this.handleUserInput}
                       value={this.state.searchTerm}
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
