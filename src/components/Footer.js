import React from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "../css/Navbar.css";

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar id="navbar" type="dark" theme="primary" expand="md">
        <NavbarBrand href="/">HackFrontend</NavbarBrand>
          <Nav navbar>
            <NavItem>
              <NavLink active href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink active href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}
