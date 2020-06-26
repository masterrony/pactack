import React, { Component } from 'react';

import logoImg from '../../../assets/images/logo.png'

class Logo extends Component {
  render() {
    return (
    
      <a className="navbar-brand" href="">
        <img src={logoImg} alt="logo" />
      </a>

    );
  }
}

export default Logo;
