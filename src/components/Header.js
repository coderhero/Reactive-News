import React, {Component} from 'react';
import {Button} from 'antd';

class NewsHeader extends Component {
  render() {
    return (
      <header>
        <h2>This is my Header</h2>
        <Button>Login in</Button>
      </header>
    )
  }
}



export default NewsHeader;
