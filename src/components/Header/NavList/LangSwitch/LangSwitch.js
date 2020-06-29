import React, { Component } from 'react';

import $ from 'jquery'

class LangSwitch extends Component {

  switchLang(e) {
    let currentLang = $(e.target).attr('data-lang')

    if(currentLang == 'en') {
      $(e.target).attr('data-lang', 'dk')
      $(e.target).text('DK')
      $('button#dropdownMenuButton').text('EN')
    } else {
      $(e.target).attr('data-lang', 'en')
      $(e.target).text('EN')
      $('button#dropdownMenuButton').text('DK')
    }
  }

  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          DK
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" data-lang="en" href="#" onClick={e => this.switchLang(e)}>EN</a>
        </div>
      </div>
    );
  }
}

export default LangSwitch;
