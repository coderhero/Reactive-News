import React from 'react';
import github from '../github-logo.png'
class NewsFooter extends React.Component {
  render() {
    return (
      <div className="news-footer">
        <a href="https://github.com/coderhero/Reactive-News" target="_blank">
          <img className="github-logo" src={github} />
        </a>
      </div>
    )
  }
}


export default NewsFooter;
