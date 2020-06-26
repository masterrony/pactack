import React, { Component } from 'react';

import IntroImage from './IntroImage'


class Intro extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 div-intro">
          <h1>
            EMBRACE YOUR<br />LOYAL CUSTOMER
          </h1>
          <p>
            PayTack extends the physical experience to a digital customer relationship that drives loyalty helping business owners to establish direct relationship with them without the mediation of food delivery platforms.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12">
          <IntroImage />
        </div>
      </div>
    )
  }
}

export default Intro;
