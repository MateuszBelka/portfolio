import React from 'react';
import Project from "./Project/Project";
import data from "../data/Projects/projects-data.json"

import './Projects.scss';

const printProjects = data.Projects.map((element,i) =>
    <Project project={element} key={i} />
);

export default function Projects() {
    return (
        <div className="projects">
            {printProjects}
        </div>
    );
}
