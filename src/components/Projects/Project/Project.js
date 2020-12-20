import React from 'react';

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
    );
}

export default function Project({project}) {
    // noinspection JSUnresolvedVariable
    return (
        <div className="project-card">
            <div className="top">
                <div style={{content: `url(${project.bg_image_url})`}} onClick={()=> window.open(`${project.bg_image_url}`, "_blank")}/>
            </div>
            <div className="bottom">
                <div className="bottom-content">
                    <div className="body-wrapper">
                        <h1 className="title">{project.name}</h1>
                        <p className="desc">{project.desc}</p>
                    </div>
                    <div className="action-buttons">
                        {printButtons(project)}
                    </div>
                </div>
            </div>
        </div>
    );
}
