import React, { Component } from 'react';
import resume from '../resume.png';

import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <img src={resume} alt='resume' />
    );
  }
}

export default Resume;
