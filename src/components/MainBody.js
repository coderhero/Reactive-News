import React, {Component} from 'react';

class NewsMainBody extends Component {
  constructor() {
    super();
    this.state = {
      username: "John",
    };
  }
  render() {
    return (
      <div>
        <h2> This is the main body </h2>
        <p>User is {this.state.username}</p>
      </div>
    )
  }
}

export default NewsMainBody;
