import React, { Component } from 'react';

import CustomerCard from './CustomerCard'

import imgCafe from '../../assets/images/cafe.jpg'

import imgBar from '../../assets/images/bar.jpg'

import imgRetail from '../../assets/images/retail.jpg'

import bgImgSecond from '../../assets/assets/work/background_second.png'


class WorkCustomer extends Component {
  constructor() {
    super()
    this.renderCustomerCards = this.renderCustomerCards.bind(this)
  }

  state = {
    customers: [
      {
        id: 0,
        name: 'Cafe and restaurant',
        img: imgCafe,
      },
      {
        id: 1,
        name: 'Bars',
        img: imgBar
      },
      {
        id: 2,
        name: 'Retail',
        img: imgRetail
      }
    ]
  }

  renderCustomerCards() {
    return this.state.customers.map((customer, i) => {
      return (
        <CustomerCard detail={customer} key={customer.id} />
      )
    })
  }
 
  render() {
    return (
      <section className="sc-work-customer" id="work-customer">
        <img className="bg-img bg-img-fourth" src={bgImgSecond}></img>
        <div className="container-fluid">
          <div className="customer-title">
            <h2>
              Customers we work with
            </h2>
          </div>
           <div className="row customer-content">
            {this.renderCustomerCards()}
          </div>
        </div>
        
      </section>
    )
  }
}

export default WorkCustomer;
