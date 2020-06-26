import React, { Component } from 'react';

import Logo from './Logo'

import Toggler from './Toggler'

import NavList from  './NavList'


class Header extends Component {
  render() {
    return  (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <Logo />
        <Toggler />
        <NavList />
      </nav>
    )
  }
}

export default Header;
