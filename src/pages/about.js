import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Contactform from '../components/landing/Contactform';
import Footer from '../components/landing/Footer';

import '../../static/css/about.css';
import about from '../../static/icons/about-us/icons/about-us-img.svg';
import aboutvideo from '../../static/images/about-banner.jpg';
import feature1 from '../../static/icons/about-us/icons/fastandeasy.svg';
import feature2 from '../../static/icons/about-us/icons/flexible.svg';
import feature3 from '../../static/icons/about-us/icons/professional.svg';
import career from '../../static/icons/about-us/icons/global-career.svg';
import slide1 from '../../static/images/slik-img1.png';
import slide2 from '../../static/images/slik-img2.png';
import slide3 from '../../static/images/slik-img3.png';
import slide4 from '../../static/images/slik-img4.png';

const About = () => {
  const { t } = useTranslation();
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767.89,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/about`} />
      </Helmet>
      <div className="container-fluid header">
        <Header />
      </div>
      <button className="scrollToTop">
        <i className="material-icons">arrow_upward</i>
      </button>
      <section className="container-fluid banner">
        <div className="container">
          <img className="banner__priceImg img-fluid" src={about} alt="about" />
          <div className="hero__text">
            <h2>About Us</h2>
            <p>
              Get all the help you need to create a professional resume/cv with
              the Verified Resume Builder
            </p>
          </div>
        </div>
      </section>
      <div className="video__sectio">
        <div className="container">
          <div className="video__title text-center">
            <h6>Verified Resume</h6>
            <p>
              was created with you, the job hunter in mind. Searching for a new
              job is difficult enough. The primary purpose of a resume is to
              give a brief summary of your personal and professional
              experiences, education and history. The creation of a great resume
              dramatically increases your chances of landing the job of your
              dreams.
            </p>
          </div>
          <div className="video__content text-center">
            <img src={aboutvideo} alt="video" style={{ display: 'inline' }} />
          </div>
        </div>
      </div>
      <div className="card__section">
        <div className="container">
          <div className="card-title text-center">
            <h4>Why Choose Verified Resume?</h4>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card card1" style={{ color: '#fff' }}>
                <div className="card__icon">
                  <img className="fast" src={feature1} alt="feature1" />
                </div>
                <div className="card__cont">
                  <h6>Fast and Easy to Use</h6>
                  <p>
                    Resume builder for everyone from recent graduates heading
                    into the workforce to senior level executives.
                  </p>
                  <ul>
                    <li>PDF download</li>
                    <li>Multiple fonts & colors</li>
                    <li>Premium Templates</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card card2">
                <div className="card__icon">
                  <img className="flexibleImg" src={feature2} alt="feature2" />
                </div>
                <div className="card__cont">
                  <h6>The Newest Technology</h6>
                  <ul>
                    <li>Digital Wallet (COMING IN 2ND QTR, 2021)</li>
                    <li>Blockchain Security</li>
                    <li>
                      Personal Card with QR Code (COMING IN 2ND QTR, 2021)
                    </li>
                    <li>Visibility to Recruters</li>
                    <li>
                      Resumes assigned a QR code and stored on the blockchain
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="card card2">
                <div className="card__icon">
                  <img
                    className="professionalImg"
                    src={feature3}
                    alt="feature3"
                  />
                </div>
                <div className="card__cont">
                  <h6>Flexible Pricing</h6>
                  <ul>
                    <li>Free Basic Plans</li>
                    <li>Premium Plans</li>
                    <li>Executive Plans (COMING IN 2ND QTR, 2021)</li>
                    <li>
                      Low monthly and yearly pricing depending on budget/needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quick">
        <div className="container quick__head text-center">
          <div className="quick-head">
            <h6>
              We have built the only global resume builder web site that
              utilizes blockchain technology to help you find your dream job
              safely & securely
            </h6>
          </div>
        </div>
        <div className="container-fluid quick__content job__content">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12 quick__image">
                <img src={career} alt="career" />
              </div>
              <div className="col-md-6 col-lg-6 col-sm-12 quick__text">
                <p>
                  Verified Resume worked with a team of expert advisors, job
                  recruiters and senior executives to develop a career site with
                  the job seeker in mind. The idea for Verified Resume was
                  developed 2 years ago. The founders, David Fliss - CEO and
                  Raul Fuentes - CFO partnered with Veridoc Global which is one
                  of the world&apos;s leading blockchain solution providers.
                </p>
                <p>
                  Little did we know, the entire global market was going to be
                  devastated by the global Coronavirus pandemic in 2020. Tens of
                  millions of jobs were affected in the USA and 100&apos;s of
                  millions of people lost their jobs around the world. Many
                  industries were deeply affected. In 2021 the global economy is
                  expected to rebound. There are estimates that over 100 million
                  jobs will need to be filled globally over the next 12-24
                  months. Verified Resume wants to help you with the support you
                  need to find your next job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="client-area">
        <div className="container">
          <h6>QUICK, EASY AND SECURE</h6>
          <h3>Our resumes get people hired at top companies</h3>

          <div className="logo-area slider">
            <Slider {...settings}>
              <div className="slide">
                <img src={slide1} alt="com1" />
              </div>
              <div className="slide">
                <img src={slide2} alt="com2" />
              </div>
              <div className="slide">
                <img src={slide3} alt="com3" />
              </div>
              <div className="slide">
                <img src={slide4} alt="com4" style={{ marginTop: '30px' }} />
              </div>
              <div className="slide">
                <img src={slide1} alt="com1" />
              </div>
              <div className="slide">
                <img src={slide2} alt="com2" />
              </div>
              <div className="slide">
                <img src={slide3} alt="com3" />
              </div>
              <div className="slide">
                <img src={slide4} alt="com4" style={{ marginTop: '30px' }} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <Contactform />
      <Footer />
    </Wrapper>
  );
};

export default memo(About);
