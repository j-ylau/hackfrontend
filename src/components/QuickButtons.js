import React from "react";
import { Container, Row, Col, Button } from "shards-react";
import { useNavigate } from "react-router-dom";

export default function QuickButtons() {
  const navigate = useNavigate();

  const handleClick = query => {
    navigate("/search", { state: { q: query } });
  };
  return (
<Container>
      <Row>
        <Col>
          <Button outline onClick={() => handleClick("UI Kits")}>UI Kits</Button>
        </Col>
        <Col>
          <Button outline onClick={() => handleClick("Gradients")}>Gradients</Button>
        </Col>
        <Col>
          <Button outline onClick={() => handleClick("Shapes")}>Shapes</Button>
        </Col>
        <Col>
          <Button outline onClick={() => handleClick("Animations")}>Animations</Button>
        </Col>
        <Col>
          <Button outline onClick={() => handleClick("Components")}>Components</Button>
        </Col>
        <Col>
          <Button outline onClick={() => handleClick("Extra")}>Extra</Button>
        </Col>
      </Row>
    </Container>
  );
}
