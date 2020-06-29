import React, { Component } from 'react';

import ReactDom from 'react-dom'

class CustomerCard extends Component {
  
  state = {
    imgHeight: 0
  }

  componentDidMount() {
    let img = ReactDom.findDOMNode(this.refs.imageRef)
    this.imageWidth = img.width
    this.imageHeight = this.imageWidth * 2 / 3
    this.setState({imgHeight: this.imageHeight})
  }
 
  render() {
    return (
      <div className="col-md-4 col-sm-12">
        <div className="card customer-card">
          <img className="card-img-top" ref="imageRef" src={this.props.detail.img} alt={this.props.detail.name} style={{height: `${this.state.imgHeight}px`}} />
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
