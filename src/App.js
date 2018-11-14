import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'antd'
import NewsMainList from './components/MainList';
import NewsHeader from './components/Header';
import NewsFooter from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state={
      currentMainPage: 'breakingNew',
    }
    this.showMainList = this.showMainList.bind(this);
    this.menuItemSelect = this.menuItemSelect.bind(this);
  }
  async componentDidMount() {

  }
  menuItemSelect(e) {
    this.setState({currentMainPage: e.key})
    // this.showMainList()
  }

  showMainList() {
    const newsCategory = this.state.currentMainPage;
    return <NewsMainList
          newsCategory={newsCategory}
        />
  }


  render() {
    return (
      <div className="App">
        <NewsHeader menuItemSelect={this.menuItemSelect}/>
        {this.showMainList()}
        <NewsFooter />
      </div>
    );
  }
}

export default App;
