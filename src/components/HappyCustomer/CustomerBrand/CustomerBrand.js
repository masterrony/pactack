import React, { Component } from 'react';

class CustomerBrand extends Component {
  render() {
    return (
      <div className="col-md-2 col-sm-6 col-xs-6 div-brand">
        <img className="brand-img" src={this.props.detail.img} alt={this.props.detail.name} />
      </div>
    )
  }
}

export default CustomerBrand;
