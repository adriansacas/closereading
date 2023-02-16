// Based on https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/822cd9f6a70d2084c31439a4aae2fd78fc3a7dd7/front-end/src/components/GlobalNavbar/GlobalNavbar.jsx
import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const GlobalNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Close Reading</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/libraries">Libraries</Nav.Link>
            <Nav.Link href="/authors">Authors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GlobalNavBar;
