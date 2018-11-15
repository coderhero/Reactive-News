import React, {Component} from 'react';
import axios from 'axios';
import NewsCard from './NewsCard'

const BASE_HEADLINES_URL = 'https://newsapi.org/v2/top-headlines?' +
'country=us&language=en'
const BASE_SEARCH_URL = 'https://newsapi.org/v2/everything?q='

class NewsMainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
    };
  }
  async componentDidMount() {
    const newsCategory = this.props.newsCategory;
    this.fetchBreakingNews();

  }
  async componentWillReceiveProps(nextProps) {
    if (nextProps.newsCategory === 'breakingNews') {
      this.fetchBreakingNews()
    } else if (this.props.newsCategory !== nextProps.newsCategory) {
      this.fetchCategoryNews(nextProps.newsCategory);
    }
  }
  async fetchBreakingNews() {
    const resp = await axios(`${BASE_HEADLINES_URL}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    this.setState(
      {newsData: resp.data.articles}
    )
  }

  async fetchCategoryNews(category) {
    const newsSearchURL = `${BASE_SEARCH_URL}${category}&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    const resp = await axios(newsSearchURL);
    this.setState(
      {newsData: resp.data.articles}
    )
  }

  render() {
    return (
      <div>
        {this.state.newsData.map(
          (article, index) => (<NewsCard key={index} newsCardData={article}/>)
        )}
      </div>
    )
  }
}

export default NewsMainList;
