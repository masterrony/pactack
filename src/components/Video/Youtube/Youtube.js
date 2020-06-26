import React, { Component } from 'react';

import roundImg from '../../../assets/assets/video/round.png'

class Youtube extends Component {
  render() {
    return (
      <div className="youtube-wrapper">
        <div className="div-round-img">
          <img src={roundImg}></img>
        </div>
        <iframe 
          width="100%" 
          height="320px"
          style={{borderRadius: '15px'}}
          src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
      </div>
    )
  }
}

export default Youtube;
