import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import "../App.css";
export default function Card() {
  return (
    <Container id="inner-card-container">
      <Row>
        <Col sm="12" md="4" lg="2">
          <img
            src="https://hype4.academy/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo%402x.df767ab4.png&w=320&q=75"
            width="100px"
          />
        </Col>
        <Col sm="12" md="4" lg="8">
          <h4>Glassmorphism</h4>
          {/* <h6>“frosted glass” effect</h6> */}
          <p>
            Glassmorphism is a design style, coined by Michal Malewicz from
            Hype4.Academy to connect and combine all of the uses of the “frosted
            glass” effect in the UI. By categorizing it and giving it a common
            name, it became easier to find and learn about it from resources all
            around the web.
          </p>
        </Col>
        <Col sm="12" md="4" lg="2">
          <Button outline href="#">
            VISIT
          </Button>
        </Col>
      </Row>
      <div>
        UI KITS
      </div>
    </Container>
  );
}
