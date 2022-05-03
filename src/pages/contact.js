import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Contactform from '../components/landing/Contactform';
import Footer from '../components/landing/Footer';

import '../../static/css/contact.css';
import contact from '../../static/icons/contact/contact-us.svg';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/contact`} />
      </Helmet>
      <div className="container-fluid header">
        <Header />
      </div>
      <button className="scrollToTop">
        <i className="material-icons">arrow_upward</i>
      </button>
      <section className="container-fluid banner">
        <div className="container">
          <img
            className="banner__priceImg img-fluid"
            src={contact}
            alt="contact"
          />
          <div className="hero__text">
            <h2>Contact Us</h2>
            <p>
              Get all the help you need to create a professional Resume in
              minutes
            </p>
          </div>
        </div>
      </section>
      <section className="contact__info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
              <div className="contact__icon">
                <img src="/icons/contact/office address.svg" alt="" />
              </div>
              <div className="contact__details">
                <h6>Office Address</h6>
                <p>Verified Resume</p>
                <p>Delray Beach, Florida, USA 33445</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
              <div className="contact__icon">
                <img src="/icons/contact/contact-info.svg" alt="" />
              </div>
              <div className="contact__details">
                <h6>Contact Info</h6>
                <a href="tel:15617070378">
                  <span>Tel :</span> +1-561-707-0378
                </a>
                <br />
                <a href="mailto:info@verifiedresume.me">
                  <span>Email :</span> info@verifiedresume.me
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
              <div className="contact__icon">
                <img src="/icons/contact/contact-info.svg" alt="" />
              </div>
              <div className="contact__details">
                <h6>Para espanol contacte a Raul Fuentes</h6>
                <a href="tel:525618506746">
                  <span>Tel :</span> +52-56-1850-6746
                </a>
                <br />
                <a href="mailto:info@verifiedresume.me">
                  <span>Email :</span> info@verifiedresume.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map" style={{ display: 'none' }}>
        <iframe
          title="gmaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.1192900397973!2d138.60452246314284!3d-34.90739589172341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c9245edbe4ff%3A0xceffa1c790e63eaa!2sMelbourne%20St%2C%20North%20Adelaide%20SA%205006%2C%20Australia!5e0!3m2!1sen!2sin!4v1607659311827!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
        />
      </div>
      <Contactform />
      <Footer />
    </Wrapper>
  );
};

export default memo(Contact);
