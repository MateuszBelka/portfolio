import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAddressCard, faCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './Home.scss';

export default function Home() {
    return (
        <div className="grid center fullHeight">
            <header>
                <h1>Mateusz Belka</h1>
                <div>
                    <p>Software</p>
                    <p>Engineer</p>
                </div>
                <nav className="grid">
                    <ul>
                        <li>
                            <Link to="/projects"><FAIcon icon={faCode}/></Link>
                            <span>Projects</span>
                        </li>
                        <li>
                            <Link to="/resume"><FAIcon icon={faAddressCard}/></Link>
                            <span>Portfolio</span>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/MateuszBelka" rel="noopener noreferrer" target="_blank"><FAIcon icon={faLinkedin}/></a>
                            <span>Linkedin</span>
                        </li>
                        <li>
                            <a href="https://github.com/MateuszBelka" rel="noopener noreferrer" target="_blank"><FAIcon icon={faGithub}/></a>
                            <span>Github</span>
                        </li>
                        <li>
                            <a href="mailto:belka.mateusz.bm@gmail.com" rel="noopener noreferrer" target="_blank"><FAIcon icon={faEnvelope}/></a>
                            <span>Contact me!</span>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
