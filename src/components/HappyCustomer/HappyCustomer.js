import React, { Component } from 'react';

import CustomerBrand from './CustomerBrand'

import bgImgFirst from '../../assets/assets/happy/background_first.png'

import bgImgSecond from '../../assets/assets/happy/background_second.png'

import leonardImg from '../../assets/assets/happy/leonard.png'

import alfredoImg from '../../assets/assets/happy/alfredo.png'

import husmanImg from '../../assets/assets/happy/husman.png'

import saladsImg from '../../assets/assets/happy/salads.png'

import buddhaImg from '../../assets/assets/happy/buddha.png'

import fishImg from '../../assets/assets/happy/fish.png'

import curryImg from '../../assets/assets/happy/curry.png'

class HappyCustomer extends Component {
  constructor() {
    super()
    this.renderCustomerBrands = this.renderCustomerBrands.bind(this)
  }

  state = {
    customers: [
      {
        id: 0,
        img: leonardImg,
      },
      {
        id: 1,
        img: alfredoImg,
      },
      {
        id: 2,
        img: husmanImg,
      },
      {
        id: 3,
        img: saladsImg,
      },
      {
        id: 4,
        img: fishImg,
      },
      {
        id: 5,
        img: buddhaImg,
      },
      {
        id: 6,
        img: curryImg,
      },
      {
        id: 7,
        img: leonardImg,
      },
      {
        id: 8,
        img: leonardImg,
      },
      {
        id: 9,
        img: leonardImg,
      },
      {
        id: 10,
        img: leonardImg,
      },
      {
        id: 11,
        img: leonardImg,
      }
    ]
  }

  renderCustomerBrands() {
    return this.state.customers.map((customer, i) => {
      return (
        <CustomerBrand detail={customer} key={customer.id} />
      )
    })
  }
 
  render() {
    return (
      <section className="sc-happy-customer" id="happy-customer">
        <img className="bg-img bg-img-first" src={bgImgFirst}></img>
        <img className="bg-img bg-img-third" src={bgImgSecond}></img>
        <div className="container-fluid">
          <div className="customer-title">
            <h2>
              Our happy Customers
            </h2>
          </div>
          <div className="row customer-content">
            {this.renderCustomerBrands()}
          </div>
        </div>
        
      </section>
    )
  }
}

export default HappyCustomer;
