import React, { Component } from 'react';

import logoImg from '../../assets/assets/footer/logo.png'

import appStoreImg from '../../assets/images/app_store.png'

import playStoreImg from '../../assets/images/play_store.png'

import swedenFlagImg from '../../assets/images/sweden_flag.png'

import denmarkFlagImg from '../../assets/images/denmark_flag.png'

class Footer extends Component {
  render() {
    return (
      <section className="sc-footer" id="">
        <div className="row container-fluid">
          <div className="col-md-3 col-sm-6 div-store">
            <div>
              <img src={logoImg} alt="logo"></img>
              <p>lorem ipsum</p>
            </div>

            <div className="mb-2">
              <img src={appStoreImg} alt="app store"></img>
            </div>
            <div>
              <img src={playStoreImg} alt="google play store"></img>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div>
              <h3>Find us</h3>
            </div>

            <div>
              <div className="div-footer-country">Seden <img src={swedenFlagImg} alt="sweden"></img></div>
              <div className="div-footer-item">PayTack AB</div>
              <div className="div-footer-item">Anckargripsgatan 3.</div>
              <div className="div-footer-item">211 19 Malmo</div>
              <div className="div-footer-item">fredrk@paytack.se</div>
            </div>
            <div style={{marginTop: '5%'}}>
              <div className="div-footer-country">Denmark <img src={denmarkFlagImg} alt="denmark"></img></div>
              <div>PayTack IVS</div>
              <div>Fruebjergvej 3.</div>
              <div>2100 copenhagen</div>
              <div>CVR: 40209751</div>
              <div>santosh@paytack.se</div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h3>Information</h3>
            <div>Our Team</div>
            <div>Investors</div>
            <div>Work With Us</div>
            <div>Privacy Policy</div>
            <div>Terms And Conditions</div>
            <div>FAQ</div>
          </div>

          <div className="col-md-3 col-sm-6">
            <h3>Subscribe to our newsletter</h3>
            <p>Subscribe to Paytack to get updates on new places and offers in your town</p>
            <div className="row div-subscribe">
              <div className="col-8">
                <input type="text" className="form-control" placeholder="Enter Email Address" />
              </div>
              <div className="col-4">
                <button className="btn btn-secondary">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <p className="copyright">© PayTack 2020. All rights reserved</p>
      </section>
    )
  }
}

export default Footer;
