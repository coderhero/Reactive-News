import React from 'react';
import { Icon, Input } from 'antd';

const Search = Input.Search;
export default function SearchBox(props) {
  return (
    <div>
      <Search onChange={props.handleUserInput}
             placeholder="search News"
             value={props.value}
             onSearch={props.handleSearch}
             enterButton
           />
    </div>
  )

}
