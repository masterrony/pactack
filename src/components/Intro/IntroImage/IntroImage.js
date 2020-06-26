import React, { Component } from 'react';

import introImg from '../../../assets/assets/intro/intro.png'

class IntroImage extends Component {
  render() {
    return  (
      <div className="div-intro-img">
        <img src={introImg} alt="introduction"></img>
      </div>
    )
  }
}

export default IntroImage;
