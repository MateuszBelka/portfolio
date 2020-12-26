import React, {Component} from 'react';
import {Worker, Viewer, SpecialZoomLevel} from '@react-pdf-viewer/core';
import resume from './resume.pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './Resume.css';

export default class Resume extends Component {
    componentDidMount() {
        document.title = "Mateusz Belka | Resume"
    }

    render() {
        return (
            <div className="ResumeContainer">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={resume}
                        defaultScale={SpecialZoomLevel.PageFit}
                    />
                </Worker>
            </div>
        )
    }
}
