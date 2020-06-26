import React, { Component } from 'react';

import vectorImg from '../../../assets/assets/service/check.png'

class ServiceCard extends Component {
  constructor() {
    super()

    this.renderserviceItems = this.renderserviceItems.bind(this)
  }

  renderserviceItems() {
    return this.props.detail.items.map((item, i) => {
      return <li className="list-group-item service-item" key={i}><img src={vectorImg} /> {item}</li>
    })
  }

  render() {
    return (
      <div className="card service-card">
        <div className="card-body">
          <h5 className="card-title">
            {this.props.detail.title}
          </h5>
          <p className="card-text">
            {this.props.detail.description}
          </p>
          <hr />
          <ul className="list service-item-list">
            {this.renderserviceItems()}
          </ul>
        </div>
      </div>
    )
  }
}

export default ServiceCard;
