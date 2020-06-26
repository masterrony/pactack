import React, { Component } from 'react';

import ServiceCard from './ServiceCard'

import serviceBackground from '../../assets/assets/service/background.png'

import bgImgSecond from '../../assets/assets/service/background_second.png'

class Service extends Component {
  state = {
    service: [
      {
        title: 'PayTack Loyalty',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
        items: [
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
        ]
      },
      {
        title: 'PayTack Loyalty',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard`,
        items: [
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
          'Lorem Ipsum is simply dummy',
        ]
      }
    ]
  }

  render() {
    return (
      <section className="sc-service" id="service">
        <img className="bg-img bg-img-first" src={serviceBackground}></img>
        <img className="bg-img bg-img-third" src={bgImgSecond}></img>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12 div-service-description">
              <h2>
                Lorem Ipsum is
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              </p>
            </div>

            <div className="col-md-4 col-sm-12">
              <ServiceCard detail={this.state.service[0]} />
            </div>

            <div className="col-md-4 col-sm-12">
              <ServiceCard detail={this.state.service[1]} />
            </div>
          </div>
        </div>
        
      </section>
    )
    
  }
}

export default Service;
