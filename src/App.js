import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewsMainBody from './components/MainBody';
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
    }
  }
  async componentDidMount() {
    const resp = await axios(BASE_URL)
    console.log(resp)
    this.setState(
      {newsData: resp.data}
    )
  }
  render() {
    return (
      <div className="App">
        <NewsHeader />

        <NewsMainBody />
        <NewsFooter />
      </div>
    );
  }
}

export default App;
