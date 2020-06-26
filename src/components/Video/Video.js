import React, { Component } from 'react';

import Youtube from './Youtube'

class Video extends Component {
  render() {
    return (
      <section className="sc-video" id="youtube-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 div-video-description">
              <h2>
                Reinventing Customer Loyalty
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 div-video-youtube">
              <Youtube />
            </div>
          </div>
        </div>
      </section>
      
    )
  }
}

export default Video;
