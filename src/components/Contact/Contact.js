import React, { Component } from 'react';

import ContactForm from './ContactForm'

import backgroundImgFirst from '../../assets/assets/contact/background_first.png'

import backgroundImgSecond from '../../assets/assets/contact/background_second.png'

class Contact extends Component {
  render() {
    return (
      <section className="sc-contact" id="contact">
        <img className="bg-img bg-img-first" src={backgroundImgFirst}></img>
        <img className="bg-img bg-img-third" src={backgroundImgSecond}></img>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="contact-header">
                <h2>
                  Ready to try it out ?
                </h2>
                <p>
                  Fill out the form below, and you will be contacted by our sales team soon.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>  
        </div>
        
      </section>
    )
  }
}

export default Contact;
