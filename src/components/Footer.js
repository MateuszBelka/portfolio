import React from 'react';
import { Navbar } from 'react-bootstrap';

import './Footer.css';

//TODO: add X at bottom

export default function Footer() {
  return (
    // <div className="footer">
    //   Designed & Developed by
    //   <div className="footerName"> Mateusz Belka</div>
    // </div>

    <Navbar fixed="bottom" className="d-flex justify-content-center footer" variant="dark" bg="dark">
      <Navbar.Brand href="#/about/" className="footerText">
        Designed & Developed by
        <div className="footerName"> Mateusz Belka</div>
      </Navbar.Brand>
    </Navbar>
  )
}
