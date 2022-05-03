import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Contactform from '../components/landing/Contactform';
import Footer from '../components/landing/Footer';

import '../../static/css/price.css';
import pricing from '../../static/icons/pricing/pricing.svg';
import basic from '../../static/icons/pricing/basic.svg';
import premium from '../../static/icons/pricing/premium.svg';
/* import executive from '../../static/icons/pricing/executive.svg'; */

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/pricing`} />
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
            src={pricing}
            alt="pricing"
          />
          <div className="hero__text">
            <h2>Pricing Plan</h2>
            <p>
              Pick the plan with the features and options which is right for you
            </p>
          </div>
        </div>
      </section>
      <div className="price">
        <div className="price__heading text-center">
          <h5>Best Pricing Plan</h5>
        </div>
        <div className="container text-center">
          <span className="month">Monthly</span>
          <input type="checkbox" className="checke" />
          <span className="year">Yearly</span>
          <div className="content monthly__cards">
            <p className="yearly__cardsPlan">Subscription Monthly Plans</p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-head head1">
                    <img src={basic} alt="basic" />
                    <h3>Basic</h3>
                  </div>
                  <div className="card-content">
                    <ul className="card-item">
                      <li
                        title="1 version of resume provided"
                        className="card-list"
                      >
                        Version of resume
                      </li>
                      <small>
                        1 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="No cover letter provided"
                        className="card-list"
                      >
                        Cover letter
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="A PDF version of resume will be permitted to be downloaded"
                        className="card-list"
                      >
                        PDF Download
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Standard format template will be provided for use of resume builder"
                        className="card-list"
                      >
                        Format
                      </li>
                      <small>
                        Standard <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="QR code with Blockchain will be assigned to resume"
                        className="card-list"
                      >
                        Blockchain your resume
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="User can choose from various fonts when utilizing resume builder"
                        className="card-list"
                      >
                        Extra Fonts
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Additional premium templates to choose from"
                        className="card-list"
                      >
                        Premium Templates
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Dedicated webpage for your profile"
                        className="card-list"
                      >
                        Professional Webpage
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                  </div>
                  <div className="price__tag rate1">
                    <h3>Free</h3>
                  </div>
                  <div className="price__button1 btnn">
                    <a href="app/dashboard">Create Resume</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-head head2">
                    <img src={premium} alt="premium" />
                    <h3>Premium</h3>
                  </div>
                  <div className="card-content">
                    <ul className="card-item">
                      <li
                        title="3 versions of resume provided"
                        className="card-list"
                      >
                        Version of resume
                      </li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li title="1 cover letter provided" className="card-list">
                        Cover letter
                      </li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="A PDF version of resume will be permitted to be downloaded"
                        className="card-list"
                      >
                        PDF Download
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Standard format template will be provided for use of resume builder"
                        className="card-list"
                      >
                        Format
                      </li>
                      <small>
                        Standard <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="QR code with Blockchain will be assigned to resume"
                        className="card-list"
                      >
                        Blockchain your resume
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="User can choose from various fonts when utilizing resume builder"
                        className="card-list"
                      >
                        Extra Fonts
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Additional premium templates to choose from"
                        className="card-list"
                      >
                        Premium Templates
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Dedicated webpage for your profile"
                        className="card-list"
                      >
                        Professional Webpage
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                  </div>
                  <div className="price__tag rate2">
                    <h3>$9.99/Month</h3>
                  </div>
                  <div className="price__button2 btnn">
                    <a href="/app/payment/m1">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content yearly__cards">
            <p className="yearly__cardsPlan">
              Subscription 30% Off on Premium Plan
            </p>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-head head1">
                    <img src={basic} alt="basic" />
                    <h3>Basic</h3>
                  </div>
                  <div className="card-content">
                    <ul className="card-item">
                      <li
                        title="1 version of resume provided"
                        className="card-list"
                      >
                        Version of resume
                      </li>
                      <small>
                        1 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li title="1 cover letter provided" className="card-list">
                        Cover letter
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="A PDF version of resume will be permitted to be downloaded"
                        className="card-list"
                      >
                        PDF Download
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Standard format template will be provided for use of resume builder"
                        className="card-list"
                      >
                        Format
                      </li>
                      <small>
                        Standard <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="QR code with Blockchain will be assigned to resume"
                        className="card-list"
                      >
                        Blockchain your resume
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="User can choose from various fonts when utilizing resume builder"
                        className="card-list"
                      >
                        Extra Fonts
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Additional premium templates to choose from"
                        className="card-list"
                      >
                        Premium Templates
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Dedicated webpage for your profile"
                        className="card-list"
                      >
                        Professional Webpage
                      </li>
                      <i className="fa fa-times" />
                    </ul>
                  </div>
                  <div className="price__tag rate1">
                    <h3>Free</h3>
                  </div>
                  <div className="price__button1 btnn">
                    <a href="app/dashboard">Create Resume</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-head head2">
                    <img src={premium} alt="premium" />
                    <h3>Premium</h3>
                  </div>
                  <div className="card-content">
                    <ul className="card-item">
                      <li
                        title="3 versions of resume provided"
                        className="card-list"
                      >
                        Version of resume
                      </li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li title="1 cover letter provided" className="card-list">
                        Cover letter
                      </li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="A PDF version of resume will be permitted to be downloaded"
                        className="card-list"
                      >
                        PDF Download
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Standard format template will be provided for use of resume builder"
                        className="card-list"
                      >
                        Format
                      </li>
                      <small>
                        Standard <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li
                        title="QR code with Blockchain will be assigned to resume"
                        className="card-list"
                      >
                        Blockchain your resume
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="User can choose from various fonts when utilizing resume builder"
                        className="card-list"
                      >
                        Extra Fonts
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Additional premium templates to choose from"
                        className="card-list"
                      >
                        Premium Templates
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li
                        title="Dedicated webpage for your profile"
                        className="card-list"
                      >
                        Professional Webpage
                      </li>
                      <i className="fa fa-check" />
                    </ul>
                  </div>
                  <div className="price__tag rate2">
                    <h3>30% Discount</h3>
                  </div>
                  <div className="price__tag rate2">
                    <h3>$83.99/Year</h3>
                  </div>
                  <div className="price__button2 btnn">
                    <a href="/app/payment/y1">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactform />
      <Footer />
    </Wrapper>
  );
};

export default memo(Pricing);
