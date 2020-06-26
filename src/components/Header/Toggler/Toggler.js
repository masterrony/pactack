import React, { Component } from 'react';

class Toggler extends Component {
  render() {
    return (
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-list">
        <span className="navbar-toggler-icon"></span>
      </button>
    )
  }
}

export default Toggler;
