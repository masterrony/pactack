import React, { Component } from 'react';
import LangSwitch from './LangSwitch'

class NavList extends Component {
  render() {
    return  (
      <div className="collapse navbar-collapse" id="nav-list">

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">PAYTACK</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">LOYALTY APP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">PAYTACK SHOP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">CONTACT</a>
          </li>
          <li className="nav-item">
            <LangSwitch />
          </li>
        </ul>

      </div>
    )
  }
}

export default NavList;
