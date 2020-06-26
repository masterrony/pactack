import React, { Component } from 'react';

class CustomerCard extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-12">
        <div className="card customer-card">
          <img className="card-img-top" src={this.props.detail.img} alt={this.props.detail.name} />
          <div className="card-body">
            <p className="card-text">
              {this.props.detail.name}
            </p>
            <a href="#">Know More</a>
          </div>
        </div>
      </div>
      
    )
  }
}

export default CustomerCard;
