import React from 'react';
import { Tag } from 'antd';

export default function NewsCard(props) {
  const imgSource = props.newsCardData.urlToImage;
  const data = props.newsCardData;
  const placeholderImg = <img src='https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png'
  className="card-image" alt='Reactive News'/>
  const cardImg = <img src={data.urlToImage} className="card-image" alt='Reactive News'/>
  return (
    <li>
      <div className="card-container">
        <div className="card-img">
          {data.urlToImage ? cardImg : placeholderImg}

        </div>
        <div className='news-details'>
          <a className="card-title">
            <h2>{props.newsCardData.title}</h2>
          </a>
            <p className='card-description'>{props.newsCardData.description}</p>
            <Tag color="purple" className="news-author"><span>
              {data.author? data.author : data.source.name}</span></Tag>
            <Tag color="cyan" className="news-date"><span>
              {data.publishedAt.substr(0,10)}</span></Tag>
        </div>

      </div>
    </li>
  )
}
