# Reactive-News
### Introduction
This is a news application that provides users with latest breaking news and other
categories includes Technology, Politics, Sports, Economy and Real Estate.
It consumes [News API](https://newsapi.org/docs)
that indexes articles from over 30,000 worldwide sources.

### Features and Specs
- User is able to search news from over 30,000 news sources
- User can click on the news title and get redirected to the source website
- some UI components are empowered by [Ant Design of React](https://github.com/ant-design/ant-design/)
- User is able to Log in, Sign up, or Log out.
### Usage
- Fork or clone this repo
- cd into the repo
- run npm install --save antd axios
- npm start
### Code Snippet
Ant Design is a super convenient UI library for building responsive and
interactive React applications.
```javascript
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
```
### wireFrame
![wireframe](wireFrame.jpg)
