# Reactive-News
### MVP
### Introduction
This is a news application that consumes [News API](https://newsapi.org/docs)
some UI components are empowered by [Ant Design of React](https://github.com/ant-design/ant-design/)
### Features and Specs
- User
- User is able to search news from over 30,000 news sources
-
### Usage

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
![wireframe](wireFrame.jpg)
