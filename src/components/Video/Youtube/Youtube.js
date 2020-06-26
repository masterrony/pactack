import React, { Component } from 'react';

class Youtube extends Component {
  render() {
    return (
      <iframe 
        width="100%" 
        height="320px"
        style={{borderRadius: '15px'}}
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    )
  }
}

export default Youtube;
