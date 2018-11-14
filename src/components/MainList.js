import React, {Component} from 'react';
import axios from 'axios';


const BASE_URL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a70ded16d81144f9b3f50098ea0ef879'
const HEADLINES_URL = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=a70ded16d81144f9b3f50098ea0ef879'
// const TECH_URL = 'https://newsapi.org/v2/everything?q=Technology&
// apiKey=a70ded16d81144f9b3f50098ea0ef879'
const BASE_HEADLINES_URL = 'https://newsapi.org/v2/top-headlines?' +
'country=us&'
const BASE_CATEGORY_URL = 'https://newsapi.org/v2/everything?q='

class NewsMainList extends Component {
  constructor() {
    super();
    this.state = {
      searchNewsData: [],
      newsData: []

    };

  }
  async componentDidMount() {
    const resp = await axios(BASE_URL)
    this.setState(
      {newsData: resp.data.articles}
    )
    this.fetchNewsList('Real Estate');
  }
  async fetchNewsList(category) {
    const newsCategoryUrl = `${BASE_CATEGORY_URL}${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    console.log(newsCategoryUrl)
    const resp = await axios(newsCategoryUrl);
    this.setState(
      {newsData: resp.data.articles}
    )
    console.log(this.state.newsData)
  }

  handleSearch() {

  }

  render() {
    return (
      <div>
        <h2> This is the main body </h2>

      </div>
    )
  }
}

export default NewsMainList;
