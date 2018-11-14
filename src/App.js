import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'antd'
import NewsMainList from './components/MainList';
import NewsHeader from './components/Header';
import NewsFooter from './components/Footer';


const BASE_URL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a70ded16d81144f9b3f50098ea0ef879'
class App extends Component {
  constructor() {
    super();
    this.state={
      newsData: null,
      currentMainPage: null,
    }
    this.showMainList = this.showMainList.bind(this);
  }
  async componentDidMount() {
    const resp = await axios(BASE_URL)
    console.log(resp)
    this.setState(
      {newsData: resp.data}
    )
  }
  menuItemSelect() {

  }

  showMainList() {
    const page = this.state.currentMainPage;
    return <NewsMainList
          newsCategory={this.state.currentMainPage}
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
