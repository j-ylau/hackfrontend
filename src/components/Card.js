import React from "react";
import { Container, Row, Col, Button, Badge } from "shards-react";
import "../App.css";

export default function Card(props) {
  const { picurl, title, desc, url, tags } = props;
  return (
    <Container id="inner-card-container">
      <Row>
        <Col sm="12" md="4" lg="2">
          <img src={picurl} width="100px" />
        </Col>
        <Col sm="12" md="4" lg="8">
          <h4>{title}</h4>
          <p>{desc}</p>
        </Col>
        <Col sm="12" md="4" lg="2">
          <Button outline href={url}>
            VISIT
          </Button>
        </Col>
      </Row>
      {tags && Object.keys(tags).map(tag => (
        <Badge id='badges'>{tag}</Badge>
      ))}
    </Container>
  );
}
