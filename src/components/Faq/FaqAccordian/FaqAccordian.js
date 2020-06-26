import React, { Component } from 'react';

class FaqAccordian extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <a className="card-link" data-toggle="collapse" href={`#collapse${this.props.detail.id}`}>
            {this.props.detail.question}

            <i className="arrow down"></i>
          </a>
        </div>
        <div id={`collapse${this.props.detail.id}`} className={ !this.props.detail.id ? 'collapse show' : 'collapse'} data-parent="#accordion">
          <div className="card-body">
            {this.props.detail.answer}
          </div>
        </div>
      </div>
    )
  }
}

export default FaqAccordian;
