import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

// import './Header.css';

//TODO: add X at bottom

export default function Footer() {
  return (
    <Navbar fixed="bottom" className="d-flex justify-content-center" variant="dark" bg="dark">
      <Navbar.Brand href="#/about/" style={footer}>
        Designed & Engineered by
        <div style={name}> Mateusz Belka</div>
      </Navbar.Brand>
    </Navbar>
  )
}

const footer = {
  fontSize: '18px'
}

const name = {
  backgroundColor: 'inherit',
  display: 'inline',
  fontWeight: 'bold'
}
