import React, { Component } from 'react';

import Header from './components/Header'

import Intro from './components/Intro'

import Video from './components/Video'

import Service from './components/Service'

import WorkCustomer from './components/WorkCustomer'

import HappyCustomer from './components/HappyCustomer'

import Faq from './components/Faq'

import Contact from './components/Contact'

import Footer from './components/Footer'

import firstBackround from './assets/assets/intro/background_first.png'

import secondBackround from './assets/assets/intro/background_second.png'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <section className="sc-title" id="title">
          <img className="bg-img bg-img-first" src={firstBackround}></img>
          <img className="bg-img bg-img-second" src={secondBackround}></img>
          <div className="container-fluid">
            <Header />
            <Intro />
          </div>
        </section>

        <Video />
        <Service />
        <WorkCustomer />
        <HappyCustomer />
        <Faq />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
