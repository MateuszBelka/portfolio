import React, {Component} from 'react';

import './Project.scss';

function printButtons(project) {
    return (
        project.buttons.map((button, i) =>
            <div className="button-wrapper" key={i}>
                <a href={button.url} rel="noopener noreferrer" target="_blank">
                    <button>
                        {button.name}
                    </button>
                </a>
            </div>
        )
    )
}

function printStack(project) {
    return (
        project.stack.map((tech, i) =>
            <div className="tech" key={i}>
                {tech}
            </div>
        )
    )
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

class PrintProjectTopBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_height: -1,
            default_card_height: -1,
            bottom_height: -1
        }
        this.card_ref = React.createRef()
        this.top_ref = React.createRef()
        this.bottom_ref = React.createRef()
        this.ul_ref = React.createRef()
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateCardHeightOnResize)

        this.setState({
            card_height: this.card_ref.current.clientHeight,
            default_card_height: this.card_ref.current.clientHeight,
            bottom_height: this.card_ref.current.clientHeight / 2
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCardHeightOnResize)
    }

    updateCardHeightOnResize = () => {
        let new_card_height = this.card_ref.current === null ? this.state.default_card_height : this.card_ref.current.clientHeight
        this.setState({
            card_height: new_card_height,
            bottom_height: new_card_height / 2
        })
    }

    updateCardHeightOnMobileClick = () => {
        if (window.innerWidth <= 740 && Object.keys(this.props.project.desc).length !== 0) {
            let default_card_height = this.state.default_card_height
            let curr_card_height = this.card_ref.current.clientHeight
            let ul_height = this.ul_ref.current.clientHeight

            sleep(10).then(() => {
                ul_height = this.ul_ref.current.clientHeight
                let updated_card_height = this.card_ref.current.className.includes('expandMobile') ? curr_card_height + ul_height : default_card_height
                let updated_bottom_height = (updated_card_height / 2) + (this.card_ref.current.className.includes('expandMobile') ? ul_height / 2 : 0)

                this.setState({
                    card_height: updated_card_height,
                    bottom_height: updated_bottom_height
                })
            })
        }
    }

    render() {
        let cardStyle = {}
        let bottomStyle = {}
        if (!this.props.fullscreen) {
            cardStyle = {
                height: this.state.card_height + 'px'
            }
            bottomStyle = {
                height: this.state.bottom_height + 'px'
            }
        }

        return (
            <div
                className={`project-card ${this.props.fullscreen ? "" : this.props.classToAdd}`}
                onClick={() => {
                    if (!this.props.fullscreen) {
                        this.props.onClick(this.props.id)
                        this.updateCardHeightOnMobileClick()
                    }
                }}
                ref={this.card_ref}
                style={cardStyle}
            >
                <div
                    className="card-content"
                    onClick={this.props.disableOnClick ? (e) => {e.stopPropagation()} : undefined}
                >
                    <div className="top" ref={this.top_ref}>
                        {/*1:1.4 resolution*/}
                        <div style={{content: `url(${this.props.project.backgroundImage})`}}/>
                    </div>
                    <div
                        className="bottom"
                        ref={this.bottom_ref}
                        style={bottomStyle}
                    >
                        <div className="bottom-wrapper">
                            <div className="text-wrapper">
                                {/*https://stackoverflow.com/questions/28485351/how-to-reduce-font-size-if-a-line-breaks*/}
                                <h1 className="title">{this.props.project.name}</h1>
                                <ul ref={this.ul_ref}>
                                    {this.props.project.desc.map((item, i) =>
                                        <li key={i}>{item}</li>
                                    )}
                                </ul>
                                <div id="click-for-more">
                                    Click for more...
                                </div>
                            </div>
                            <div className="action-buttons">
                                <div className="stack">
                                    {printStack(this.props.project)}
                                </div>
                                <div className="buttons">
                                    {printButtons(this.props.project)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export function  ProjectFullscreen({project, turnOffFunc}) {
    return (
        <div className="project-card">
            <button className="x-btn" onClick={turnOffFunc}>&#10006;</button>
            <PrintProjectTopBottom project={project} disableOnClick={true} fullscreen={true}/>
        </div>
    )
}

export default function ProjectMini({project, id, onClick, classToAdd}) {
    return (
        <PrintProjectTopBottom project={project} disableOnClick={false} fullscreen={false} id={id} onClick={onClick} classToAdd={classToAdd}/>
    )
}
