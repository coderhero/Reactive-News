import React, { Component } from 'react';
import { Row, Col } from 'antd';
import logo from '../news-logo.png';
import NavBar from './NavBar';
import NavLoginRegister from './NavLoginRegister';
import NavUserLogout from './NavUserLogout';
import SearchBox from './SearchBox';
import LoginRegisterModal from './LoginRegisterModal'

class NewsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userName: '',
      searchTerm: '',
      isToshowModal: false, // determine if to show the Login and Singup modal
      currentModal: ''
    }
    this.menuItemSelect = this.props.menuItemSelect;
    this.handleSearch = this.props.handleSearch;
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleUserLogOut = this.handleUserLogOut.bind(this);
    this.handleUserLogIn = this.handleUserLogIn.bind(this);

  }

  handleUserLogIn(e) {
    // use setTimeout to mimic the API call
    setTimeout(
      () => {
        this.setState({
          isLoggedIn: true,
          userName: 'Yan',
        })
      }, 300)

  }
  handleLoginBtn(e) {
    if (e.currentTarget.value === 'login') {
      this.setState({currentModal: 'login',
                     isToshowModal: true});
    }
  }
  handleLogoutBtn(e) {

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
    const NavLoginRegisterCompo =
    <NavLoginRegister isLoggedIn={this.state.isLoggedIn}
                      handleUserLogIn={this.handleUserLogIn}
                      handleUserRegister={this.handleUserRegister}

             />
    const NavUserLogoutCompo =
    <NavUserLogout isLoggedIn={this.state.isLoggedIn}
                   handleUserLogOut={this.handleUserLogOut}
                   userName={this.state.userName}
             />
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
          <Col span={4} className="NavUser">
            {this.state.isLoggedIn ? NavUserLogoutCompo : NavLoginRegisterCompo}
            {/* <LoginRegisterModal isVisible={this.state.isToshowModal} /> */}

          </Col>
        </Row>
      </header>
    )
  }
}



export default NewsHeader;
