import React, { Component } from 'react';

import FaqAccordian from './FaqAccordian'

import backgroundImg from '../../assets/assets/faq/background.png'

import bgImgSecond from '../../assets/assets/faq/background_second.png'

class Faq extends Component {
  constructor() {
    super()

    this.renderFaqs = this.renderFaqs.bind(this)
  }

  state = {
    faqs: [
      {
        id: 0,
        question: 'Lorem Ipsum i simply dummy text of the printing and typesetting industry?',
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        id: 1,
        question: 'Lorem Ipsum i simply dummy text of the printing and typesetting industry?',
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        id: 2,
        question: 'Lorem Ipsum i simply dummy text of the printing and typesetting industry?',
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        id: 3,
        question: 'Lorem Ipsum i simply dummy text of the printing and typesetting industry?',
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
        id: 4,
        question: 'Lorem Ipsum i simply dummy text of the printing and typesetting industry?',
        answer: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      }
    ]
  }

  renderFaqs() {
    return this.state.faqs.map((faq, i) => {
      return (
        <FaqAccordian detail={faq} key={faq.id} />
      )
    })
  }

  render() {
    return (
      <section className="sc-faq" id="faq">
        <img className="bg-img bg-img-first" src={backgroundImg}></img>
        <img className="bg-img bg-img-fourth" src={bgImgSecond}></img>
        <div className="container-fluid">
          <div className="faq-title">
            <h2>FAQ</h2>
          </div>

          <div id="accordion">
            {this.renderFaqs()}
          </div>
        </div>
        
      </section>
    )
  }
}

export default Faq;
