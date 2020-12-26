import React, {Component} from 'react';

import './About.scss';


export default class About extends Component {
    componentDidMount() {
        document.title = "Mateusz Belka | About"
    }

    render() {
        return (
            <div className="about-me-parent">
                <div className="about-me-wrapper">
                    <div className="text-wrapper">
                        <div className="header">
                            <p>Hi, my name is</p>
                            <h1>Mateusz Belka</h1>
                            <p>or just call me Matt</p>
                        </div>
                        <div className="body">
                            <p>I'm a dedicated developer, passionate about technology, programming, and learning new
                                things. I'm also well-versed in software design and development through theoretical
                                engagement in data structures and algorithms as well as practical projects. I'm
                                determined to produce consistent results in an agile environment using Scrum
                                methodology.</p>
                        </div>
                    </div>
                    <div className="image-wrapper">
                        <img src={process.env.PUBLIC_URL + '/profile_pic.jpg'} alt="Profile"/>
                        <div className="job-title">Full-stack Engineer</div>
                        <div className="location">Based in Amsterdam, NL</div>
                    </div>
                </div>
            </div>
        )
    }
}


