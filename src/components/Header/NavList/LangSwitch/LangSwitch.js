import React, { Component } from 'react';

class LangSwitch extends Component {
  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          DK
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">EN</a>
        </div>
      </div>
    );
  }
}

export default LangSwitch;
