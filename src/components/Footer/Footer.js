import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Footer.css';

//TODO: add X at bottom

export default function Footer() {
  return (
      <Navbar fixed="bottom" className="d-flex justify-content-center footer" variant="dark" bg="dark">
          <Navbar.Brand href="#/about/">
              Designed & Developed by
              <div className="FooterName"> Mateusz Belka</div>
          </Navbar.Brand>
      </Navbar>
  )
}
