import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

import './Header.scss';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="inherit" variant="dark" className="navHeader">
            <Navbar.Brand href="#/">
                <div className="nameContainer">
                    <div className="name">Mateusz Belka</div>
                    <div className="jobTitle">
                        <p>Software</p>
                        <p>Engineer</p>
                    </div>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#/projects">Projects</Nav.Link>
                    <Nav.Link href="#/resume">Resume</Nav.Link>
                    <Nav.Link href="#/about">About</Nav.Link>
                    <a href="mailto:belka.mateusz.bm@gmail.com" rel="noopener noreferrer" target="_blank" className="email-link">Get In Touch</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
