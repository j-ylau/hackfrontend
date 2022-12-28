import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
} from "shards-react";
import { Container, Row, Col } from "shards-react";
import "../css/SearchBar.css";
import { Button } from "shards-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBarHome() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    navigate({
      pathname: "/search",
      search: `/search?q=${inputValue}`,
    });
  };
  return (
    <Container id="form-container">
      <Row>
        <Col>
          <InputGroup size="sm" seamless id="search-container">
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput
              className="border-0"
              placeholder="Search..."
              onChange={handleChange}
              value={inputValue}
            />
            <Button onClick={handleClick}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
