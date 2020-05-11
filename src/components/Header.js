import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'

import './Header.css';

export default function Header() {
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
          <Nav.Link href="#/">Projects</Nav.Link>
          <Nav.Link href="#/resume/" onClick={() => scroll.scrollTo(200)}>Resume</Nav.Link>
          <Nav.Link href="#/about/">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
