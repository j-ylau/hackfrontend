import React from "react";
import { Container, Row, Col, Button } from "shards-react";

export default function QuickButtons() {
  return (
    <Container>
      <Row>
        <Col>
          <Button outline>UI Kits</Button>
        </Col>
        <Col>
          <Button outline>Gradients</Button>
        </Col>
        <Col>
          <Button outline>Shapes</Button>
        </Col>
        <Col>
          <Button outline>Animations</Button>
        </Col>
        <Col>
          <Button outline>Components</Button>
        </Col>
        <Col>
          <Button outline>Extra</Button>
        </Col>
      </Row>
    </Container>
  );
}
