import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <form action="#" method="post" className="form-contact">
        <div className="row">
          <input type="text" name="company-name" className="form-control" placeholder="Company name" />
        </div>
        <div className="row">
          <input type="email" name="company-email" className="form-control" placeholder="Company name" />
        </div>
        <div className="row">
          <input type="text" name="person-name" className="form-control" placeholder="Company name" />
        </div>
        <div className="row">
          <textarea name="message" rows="4" className="form-control" placeholder="Type your message" />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }
}

export default ContactForm;
