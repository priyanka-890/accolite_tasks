import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <LinkContainer to="/login">
          <Navbar.Brand>Login</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/features">
            <Nav.Link>features</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/pricing">
            <Nav.Link>Pricing</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
