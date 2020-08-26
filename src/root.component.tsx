import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="nav-link" activeClassName="active" to="/todos">
              View todos
            </NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/add">
              Add todo
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Router>
  );
}
