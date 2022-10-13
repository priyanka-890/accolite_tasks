import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Spacex</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/capsules">Capsules</Nav.Link>
          <Nav.Link href="/Ships">Ships</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavigationBar;
