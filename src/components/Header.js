import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Header.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="inherit" variant="dark" className="navContainer">
      <Navbar.Brand href="#/">
        <div className="nameContainer">
          <div className="name">Mateusz Belka</div>
          <div className="jobTitle">Software Engineer</div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/resume/">Resume</Nav.Link>
          <Nav.Link href="#/about/">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
