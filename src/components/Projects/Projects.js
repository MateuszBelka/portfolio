import React, {Component} from 'react';
import ProjectMini, { ProjectFullscreen } from "./Project/Project";
import data from "../data/Projects/projects-data.json"

import './Projects.scss';

export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullscreen: false,
            fullscreenProjectID: -1,
        }
    }

    turnOnFullscreen = (projectID) => {
        if (window.innerWidth > 740) {
            this.setState({
                fullscreen: true,
                fullscreenProjectID: projectID,
            }, () => {
                console.log("fullscreen: " + this.state.fullscreen)
                console.log("fullscreenProjectID: " + this.state.fullscreenProjectID)
            })
        }
    }

    turnOffFullscreen = () => {
        this.setState({
            fullscreen: false,
            fullscreenProjectID: -1,
        }, () => {
            console.log("fullscreen: " + this.state.fullscreen)
            console.log("fullscreenProjectID: " + this.state.fullscreenProjectID)
        })
    }

    render() {
        return (
            <div className="projects">
                <div className="mini-cards">
                    {data.Projects.map((element,i) =>
                        <ProjectMini project={element} key={i} id={i} onClick={this.turnOnFullscreen}/>
                    )}
                </div>
                {this.state.fullscreen &&
                    <div className="fullscreen-wrapper" onClick={this.turnOffFullscreen}>
                        <ProjectFullscreen project={data.Projects[this.state.fullscreenProjectID]} turnOffFunc={this.turnOffFullscreen}/>
                    </div>
                }
            </div>
        );
    }
}