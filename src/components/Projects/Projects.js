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
            isMobileExpanded: [],
        }
        this.cards_ref = React.createRef()
        this.cards_ref.current = []
    }

    componentDidMount() {
        document.title = "Mateusz Belka | Projects"
    }

    showMore = (projectID) => {
        if (window.innerWidth > 740) {
            this.turnOnFullscreen(projectID)
        } else {
            this.changeDescMobile(projectID)
        }
    }

    changeDescMobile = (projectID) => {
        let isMobileExpanded_updated = [...this.state.isMobileExpanded]
        isMobileExpanded_updated[projectID] = !this.state.isMobileExpanded[projectID]
        this.setState({
            isMobileExpanded: isMobileExpanded_updated
        })
    }

    turnOnFullscreen = (projectID) => {
        this.setState({
            fullscreen: true,
            fullscreenProjectID: projectID,
        })
    }

    turnOffFullscreen = () => {
        this.setState({
            fullscreen: false,
            fullscreenProjectID: -1,
        })
    }

    addToCardRefs = (element) => {
        if (element && !this.cards_ref.current.includes(element)) {
            this.cards_ref.current.push(element)
            this.setState(state => ({
                isMobileExpanded: [...state.isMobileExpanded, false]
            }))
        }
    }

    render() {
        return (
            <div className="projects">
                <div className="mini-cards">
                    {data.Projects.map((element,i) =>
                        <div ref={this.addToCardRefs} key={i} className="card-wrapper">
                            <ProjectMini project={element} id={i} onClick={this.showMore} classToAdd={this.state.isMobileExpanded[i] ? "expandMobile" : ""}/>
                        </div>
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