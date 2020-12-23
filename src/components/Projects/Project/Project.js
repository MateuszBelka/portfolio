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

class PrintProjectTopBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card_height_px: -1,
            action_buttons_height_px: -1,
            title_height_px: -1,
            desc_heights_px: [],
            li_classes: []
        }
        this.card_ref = React.createRef()
        this.action_buttons_ref = React.createRef()
        this.title_ref = React.createRef()
        this.desc_refs = React.createRef()
        this.desc_refs.current = []
    }

    componentDidMount() {
        this.setup_li_classes()

        // Add onResize listener for div
    }

    setup_li_classes = () => {
        this.desc_refs.current.forEach((li) => {
            this.setState(state => ({
                desc_heights_px: [...state.desc_heights_px, li.clientHeight]
            }))
        })

        this.setState({
            card_height_px: this.card_ref.current.clientHeight,
            action_buttons_height_px: this.action_buttons_ref.current.clientHeight,
            title_height_px: this.title_ref.current.clientHeight,
        }, () => {
            let n = this.how_many_lis_to_show()
            for (let i = 0; i < this.desc_refs.current.length; i++) {
                this.setState(state => ({
                    li_classes: [...state.li_classes, i < n ? "show" : "hide" ]
                }))
            }
            this.setState({
                number_of_li_shown: n
            })
        })
    }

    how_many_lis_to_show = () => {
        let available_height_px = ((this.state.card_height_px / 2) * 0.8) - this.state.action_buttons_height_px - this.state.title_height_px
        let can_add_more_li = true
        let i = 0
        while (can_add_more_li && i < this.state.desc_heights_px.length) {
            let current_li_height = this.state.desc_heights_px[i]
            available_height_px -= current_li_height
            can_add_more_li = available_height_px > 0
            i += 1
        }
        if (!can_add_more_li) {
            i -= 1
        }
        return i
    }

    addToDescRefs = (element) => {
        if (element && !this.desc_refs.current.includes(element)) {
            this.desc_refs.current.push(element)
        }
    }

    render() {
        return (
            <div className="card-content" onClick={this.props.disableOnClick ? (e) => {e.stopPropagation()} : undefined} ref={this.card_ref}>
                <div className="top">
                    {/*1:1.4 resolution*/}
                    <div style={{content: `url(${this.props.project.backgroundImage})`}}/>
                </div>
                <div className="bottom">
                    <div className="bottom-wrapper">
                        <div className="text-wrapper">
                            {/*https://stackoverflow.com/questions/28485351/how-to-reduce-font-size-if-a-line-breaks*/}
                            <h1 className="title" ref={this.title_ref}>{this.props.project.name}</h1>
                            <ul>
                                {this.props.project.desc.map((item, i) =>
                                    <li key={i} className={this.state.li_classes[i]} ref={this.addToDescRefs}>{item}</li>
                                )}
                            </ul>
                        </div>
                        <div className="action-buttons" ref={this.action_buttons_ref}>
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
        )
    }
}

export function  ProjectFullscreen({project, turnOffFunc}) {
    return (
        <div className="project-card fullscreen">
            <button className="x-btn" onClick={turnOffFunc}>&#10006;</button>
            <PrintProjectTopBottom project={project} disableOnClick={true}/>
        </div>
    )
}

export default function ProjectMini({project, id, onClick}) {
    return (
        <div className="project-card" onClick={() => onClick(id)}>
            <PrintProjectTopBottom project={project} disableOnClick={false}/>
        </div>
    )
}
