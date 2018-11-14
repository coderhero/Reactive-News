import React from 'react';
import { Row, Col } from 'antd'
export default function NewsCard(props) {
  const imgSource = props.newsCardData.urlToImage;
  return (
    <div>
      <Row>
        <Col span={4}></Col>
        <Col span={14}>
          <div>
          <img src={imgSource} width={400} alt='Reactive News'/>
          <Row><h4>{props.newsCardData.title}</h4></Row>
          <Row><p>{props.newsCardData.description}</p></Row>
        </div>
        </Col>
        <Col span={4}></Col>
      </Row>
    </div>
  )
}
