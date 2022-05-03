import { navigate } from '@reach/router';
import React, { memo, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import DatabaseContext from '../../contexts/DatabaseContext';
import Header from '../../components/site/header';
import Footer from '../../components/site/footer';

import '../../../static/cvsite/css/owl.theme.default.min.css';
import '../../../static/cvsite/css/animate.min.css';
import '../../../static/cvsite/css/jquery.pagepiling.css';
import '../../../static/cvsite/css/jquery.fancybox.min.css';
import '../../../static/cvsite/css/LineIcons.css';
import '../../../static/cvsite/css/style.css';

const SiteViewer = ({ id }) => {
  const { t } = useTranslation();
  const [siteData, setsiteData] = useState(null);
  const { getSiteData } = useContext(DatabaseContext);

  useEffect(() => {
    (async () => {
      const data = await getSiteData(id);

      // eslint-disable-next-line no-console
      console.log(data);

      if (!data) {
        navigate('/');
        toast.error(
          `The link you were looking for does not exist or maybe removed.`,
        );
        return null;
      }

      setsiteData(data);
    })();
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/site/${id}`} />

        <meta name="msapplication-TileColor" content="#222222" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="text/javascript"
          src="../../../static/cvsite/js/jquery.pagepiling.min.js"
        />
        <script
          type="text/javascript"
          src="../../../static/cvsite/js/jquery.fancybox.min.js"
        />
      </Helmet>
      <div className="wrapper">
        <Header />
        <div id="content" className="content">
          <div className="homepage-personal a-pagepiling">
            <div className="section pp-scrollable slide-dark slide-dark-footer slide-personal-intro">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="slide-photo circle-golden slide-intro-circle1 transformLeft" />
                  <div className="slide-photo circle-brown slide-intro-circle2 transformRight" />
                  {/* <div className="slide-photo slide-intro-man" /> */}
                </div>
                <div className="container">
                  <div className="slide-num">1</div>
                  <div className="row">
                    <div className="col-sm-6 col-10">
                      <h1 className="slide-title animate-element delay5 fadeInDown">
                        Hayley Raymond
                      </h1>
                      <div className="animate-element delay5 fadeInUp">
                        <h3 className="slide-title-sub">
                          interaction &amp; visual product designer
                        </h3>
                        <div className="slide-descr slide-descr-intro">
                          I’m Hayley Raymond, a freelance Interaction &amp;
                          Visual Product Designer based in Toronto, Canada.
                          “Design is thinking made visual”.
                        </div>
                        <div className="slide-btn">
                          <button
                            className="btn btn-success"
                            data-toggle="modal"
                            data-target="#send-request"
                          >
                            get started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pp-scrollable slide-personal-services">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="slide-photo circle-light slide-services-circle2 transformLeft" />
                  <div className="slide-photo circle-brown slide-services-circle1 transformRight" />
                </div>
                <div className="container">
                  <div className="slide-num">2</div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="animate-element delay5 fadeInDown">
                        <h2 className="slide-title slide-title-personal-services slide-title-lg">
                          23
                        </h2>
                        <div className="d-md-none">
                          <div className="slide-title-sub slide-title-sub-sm">
                            YEARS EXPERIENCE
                          </div>
                          <div className="slide-descr slide-descr-personal-services font-italic">
                            *Crafting beautiful brands and websites.{' '}
                            <a
                              href="#Contact"
                              className="text-primary text-underline"
                            >
                              Contact me
                            </a>{' '}
                            for more servies.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <h3 className="slide-title-info animate-element delay5 fadeInDown">
                        From beginning ideas to individual integrity, rich
                        identity from the line{' '}
                        <span className="text-primary">
                          on the paper to final projects.
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="row animate-element delay5 fadeInUp">
                    <div className="col-md-4 d-none d-md-block">
                      <div className="slide-title-sub slide-title-sub-sm">
                        YEARS
                        <div className="d-none d-md-block" /> EXPERIENCE
                      </div>
                      <div className="slide-descr slide-descr-personal-services font-italic">
                        *Crafting beautiful brands and websites.{' '}
                        <a
                          href="#Contact"
                          className="text-primary text-underline"
                        >
                          Contact me
                        </a>{' '}
                        for more servies.
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="service-list row">
                        <div className="col-md-6">
                          <div className="service-item">
                            <div className="service-item-title slide-title-sub">
                              Web Design
                            </div>
                            <div className="service-item-descr slide-descr">
                              Provide our customers with optimized user-friendly
                              experience to increase the efficiency of digital
                              products.
                            </div>
                            <div className="service-item-more">
                              <a
                                href="#"
                                className="btn btn-sm btn-circle btn-success"
                              >
                                <i className="lni lni-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="service-item">
                            <div className="service-item-title slide-title-sub">
                              mobile app Design
                            </div>
                            <div className="service-item-descr slide-descr">
                              Mobile application development is a highlight that
                              businesses are interested in at the moment and in
                              the future.
                            </div>
                            <div className="service-item-more">
                              <a
                                href="#"
                                className="btn btn-sm btn-circle btn-success"
                              >
                                <i className="lni lni-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="service-item">
                            <div className="service-item-title slide-title-sub">
                              Branding
                            </div>
                            <div className="service-item-descr slide-descr">
                              Understanding the business and their target
                              customers, I’m the bridges to bring the brand
                              closer to their clients.
                            </div>
                            <div className="service-item-more">
                              <a
                                href="#"
                                className="btn btn-sm btn-circle btn-success"
                              >
                                <i className="lni lni-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="service-item">
                            <div className="service-item-title slide-title-sub">
                              3d Modeling
                            </div>
                            <div className="service-item-descr slide-descr">
                              Help you translate your existing design or concept
                              into CAD or to work with you to develop the ideal
                              design.
                            </div>
                            <div className="service-item-more">
                              <a
                                href="#"
                                className="btn btn-sm btn-circle btn-success"
                              >
                                <i className="lni lni-plus" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pp-scrollable slide-dark slide-dark-bg text-white slide-personal-projects">
              <div className="carousel-project-personal a-carousel-projects owl-carousel owl-theme">
                <div
                  className="carousel-project-item"
                  style={{
                    backgrounImage:
                      'url(../../../static/cvsite/img/bg-personal-project-1.jpg)',
                  }}
                >
                  <div className="slide-container">
                    <div className="container">
                      <div className="slide-num">3</div>
                      <div className="animate-element delay5 fadeInDown">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="slide-title-sub slide-title-sub-md">
                              featured works
                            </div>
                          </div>
                          <div className="col-md-5 text-md-right">
                            <div className="project-date">May 2019</div>
                            <div className="slide-title-sub slide-title-sub-md mb-md-3">
                              branding
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <h3 className="slide-title text-white">
                              notebook stationary
                            </h3>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="slide-descr slide-descr-projects">
                                  It&apos;s a specially organized area zoned and
                                  planned for&nbsp;the&nbsp;purpose of
                                  industrial development.
                                  <br /> Boryslav Innovative Platform.
                                </div>
                              </div>
                            </div>
                            <div className="slide-btn slide-btn-projects">
                              <a href="#" className="btn btn-success">
                                view project
                              </a>
                              <a
                                href="#"
                                className="slide-projects-more mt-2 mb-2"
                              >
                                see all projects
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-project-item"
                  style={{
                    backgrounImage:
                      'url(../../../static/cvsite/img/bg-personal-project-2.jpg)',
                  }}
                >
                  <div className="slide-container">
                    <div className="container">
                      <div className="slide-num">3</div>
                      <div className="animate-element delay5 fadeInDown">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="slide-title-sub slide-title-sub-md">
                              featured works
                            </div>
                          </div>
                          <div className="col-md-5 text-md-right">
                            <div className="project-date">jan 2019</div>
                            <div className="slide-title-sub slide-title-sub-md mb-md-3">
                              branding
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <h3 className="slide-title text-white">
                              the coffee shop
                            </h3>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="slide-descr slide-descr-projects">
                                  The Coffee Shop needed branding that stood out
                                  on&nbsp;competitive store shelves and embodied
                                  their mission for people life.
                                </div>
                              </div>
                            </div>
                            <div className="slide-btn slide-btn-projects">
                              <a href="#" className="btn btn-success">
                                view project
                              </a>
                              <a
                                href="#"
                                className="slide-projects-more mt-2 mb-2"
                              >
                                see all projects
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-project-item"
                  style={{
                    backgrounImage:
                      'url(../../../static/cvsite/img/bg-personal-project-3.jpg)',
                  }}
                >
                  <div className="slide-container">
                    <div className="container">
                      <div className="slide-num">3</div>
                      <div className="animate-element delay5 fadeInDown">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="slide-title-sub slide-title-sub-md">
                              featured works
                            </div>
                          </div>
                          <div className="col-md-5 text-md-right">
                            <div className="project-date">feb 2018</div>
                            <div className="slide-title-sub slide-title-sub-md mb-md-3">
                              web design
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <h3 className="slide-title text-white">
                              etheant studio
                            </h3>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="slide-descr slide-descr-projects">
                                  Create clarifying strategy, beautiful logo and
                                  identity design, engaging websites and ongoing
                                  marketing support.
                                </div>
                              </div>
                            </div>
                            <div className="slide-btn slide-btn-projects">
                              <a href="#" className="btn btn-success">
                                view project
                              </a>
                              <a
                                href="#"
                                className="slide-projects-more mt-2 mb-2"
                              >
                                see all projects
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-project-item"
                  style={{
                    backgrounImage:
                      'url(../../../static/cvsite/img/bg-personal-project-4.jpg)',
                  }}
                >
                  <div className="slide-container">
                    <div className="container">
                      <div className="slide-num">3</div>
                      <div className="animate-element delay5 fadeInDown">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="slide-title-sub slide-title-sub-md">
                              featured works
                            </div>
                          </div>
                          <div className="col-md-5 text-md-right">
                            <div className="project-date">feb 2018</div>
                            <div className="slide-title-sub slide-title-sub-md mb-md-3">
                              branding
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-7">
                            <h3 className="slide-title text-white">
                              tim margo card
                            </h3>
                            <div className="row">
                              <div className="col-lg-8">
                                <div className="slide-descr slide-descr-projects">
                                  Tim Margo is the Head of the School of
                                  Interaction Design at QUT and Vice Chair of
                                  the Division of Critical Web Base, AAC Crime
                                  and Design.
                                </div>
                              </div>
                            </div>
                            <div className="slide-btn slide-btn-projects">
                              <a href="#" className="btn btn-success">
                                view project
                              </a>
                              <a
                                href="#"
                                className="slide-projects-more mt-2 mb-2"
                              >
                                see all projects
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pp-scrollable slide-dark-footer slide-personal-awards">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="slide-photo circle-green slide-awards-circle1 transformLeft" />
                  <div className="slide-photo circle-brown slide-awards-circle2 transformRight" />
                </div>
                <div className="container">
                  <div className="slide-num">4</div>
                  <div className="row align-items-center animate-element delay5 fadeInDown">
                    <div className="col-md-7">
                      <h2 className="slide-title mb-5 mb-md-0">awards</h2>
                    </div>
                    <div className="col-md-5">
                      <h3 className="slide-title-info mb-5 mb-md-0">
                        Professional awards I’ve reached during{' '}
                        <span className="text-primary">my working times.</span>
                      </h3>
                    </div>
                  </div>
                  <div className="row award-list animate-element delay5 fadeInUp">
                    <div className="col-lg-4">
                      <div className="award-item">
                        <div className="award-item-date">apr 2019</div>
                        <div className="award-item-logo">
                          <img
                            src="../../../static/cvsite/img/pic1.png"
                            alt=""
                          />
                        </div>
                        <div className="award-item-title slide-title-sub">
                          Site of the year&nbsp;2019
                        </div>
                        <div className="award-item-descr slide-descr">
                          For minimal and elegant premium branding design
                          package
                        </div>
                        <div className="award-item-more">
                          <a href="#" className="text-success">
                            See Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="award-item">
                        <div className="award-item-date">may 2018</div>
                        <div className="award-item-logo">
                          <img
                            src="../../../static/cvsite/img/pic2.png"
                            alt=""
                          />
                        </div>
                        <div className="award-item-title slide-title-sub">
                          1st Winner creative Design Championship
                        </div>
                        <div className="award-item-descr slide-descr">
                          For most favorited design voted by NY City Style
                          customers
                        </div>
                        <div className="award-item-more">
                          <a href="#" className="text-success">
                            See Project
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="award-item">
                        <div className="award-item-date">sep 2015</div>
                        <div className="award-item-logo">
                          <img
                            src="../../../static/cvsite/img/pic3.png"
                            alt=""
                          />
                        </div>
                        <div className="award-item-title slide-title-sub">
                          best 5 Branding Project of nominations
                        </div>
                        <div className="award-item-descr slide-descr">
                          For best creative & usable health care mobile app
                          design
                        </div>
                        <div className="award-item-more">
                          <a href="#" className="text-success">
                            See Project
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pp-scrollable slide-dark slide-personal-experience">
              <div className="slide-container">
                <div className="slide-bg">
                  <div className="slide-photo slide-experience-image1" />
                  <div className="slide-photo slide-experience-image2" />
                  <div className="slide-photo slide-experience-image3" />
                </div>
                <div className="container">
                  <div className="slide-num">5</div>
                  <div className="row align-items-center mb-4 animate-element delay5 fadeInDown">
                    <div className="col-8">
                      <h2 className="slide-title mb-0">experience</h2>
                    </div>
                    <div className="col-4 text-right">
                      <div className="a-carousel-nav carousel-nav" />
                    </div>
                  </div>
                  <div className="animate-element delay5 fadeInUp">
                    <div className="carousel-experience a-carousel-experience owl-carousel owl-theme">
                      <div className="experience-list">
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2013-2019
                              </div>
                              <div className="experience-item-company slide-title-sub company-blue">
                                Facebook
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                Senior product Designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Proven ability to lead and manage a wide variety
                                of design and development projects in team and
                                independent situations.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2007-2012
                              </div>
                              <div className="experience-item-company slide-title-sub company-pink">
                                invision Inc.
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                junior ux/ui Designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Credibly streamline mission-critical value with
                                multifunctional functionalities. Leading team
                                designers.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2005-2007
                              </div>
                              <div className="experience-item-company slide-title-sub company-green">
                                spotify
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                art direction designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Assertively exploit wireless initiatives rather
                                than synergistic core competencies.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="experience-list">
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2004-2005
                              </div>
                              <div className="experience-item-company slide-title-sub company-pink">
                                invision Inc.
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                junior ux/ui Designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Credibly streamline mission-critical value with
                                multifunctional functionalities. Leading team
                                designers.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2001-2003
                              </div>
                              <div className="experience-item-company slide-title-sub company-green">
                                spotify
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                art direction designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Assertively exploit wireless initiatives rather
                                than synergistic core competencies.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="experience-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="experience-item-date">
                                2000-2001
                              </div>
                              <div className="experience-item-company slide-title-sub company-blue">
                                Facebook
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-title slide-title-sub">
                                Senior product Designer
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="experience-item-descr slide-descr">
                                Proven ability to lead and manage a wide variety
                                of design and development projects in team and
                                independent situations.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slide-btn">
                      <a href="#" className="btn btn-success">
                        <i className="lni lni-download mr-3" />
                        download my cv
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section pp-scrollable slide-personal-clients">
              <div className="slide-container">
                <div className="slide-bg" />
                <div className="container">
                  <div className="slide-num">6</div>
                  <div className="row">
                    <div className="col-lg-5">
                      <h3 className="slide-title-info mr-lg-5 pr-lg-3 animate-element delay5 fadeInDown">
                        I&apos;ve been fortunate to work with and for people
                        from some{' '}
                        <span className="text-primary">
                          amazing organizations.
                        </span>
                      </h3>
                      <div className="client-list animate-element delay5 fadeInUp">
                        <div className="clients-title title-mini">
                          achievements
                        </div>
                        <div className="client-item media">
                          <div className="client-icon">
                            <i className="icon-partners" />
                          </div>
                          <div className="media-body">
                            <div className="client-item-title">6,142</div>
                            <div className="client-item-descr slide-descr">
                              Partners worldwide, as well as designers,
                              developers and marketers.
                            </div>
                          </div>
                        </div>
                        <div className="client-item media">
                          <div className="client-icon">
                            <i className="icon-project" />
                          </div>
                          <div className="media-body">
                            <div className="client-item-title">3,498</div>
                            <div className="client-item-descr slide-descr">
                              Project completed and delivery on worldwide with
                              more 60 countries.
                            </div>
                          </div>
                        </div>
                        <div className="client-item media">
                          <div className="client-icon">
                            <i className="icon-worldwide" />
                          </div>
                          <div className="media-body">
                            <div className="client-item-title">11,024</div>
                            <div className="client-item-descr slide-descr">
                              Employees & Staffs worldwide at present.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-1 d-none d-xl-block" />
                    <div className="col-xl-6 col-lg-7">
                      <div className="clients-photo animate-element delay5 fadeZooming">
                        <div className="clients-photo-item clients-photo-item1">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-1.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item2">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite//pic-client-2.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item3">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-3.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item4">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-4.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item5">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-5.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item6">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-6.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item7">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-7.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="clients-photo-item clients-photo-item8">
                          <div className="inside">
                            <img
                              src="../../../static/cvsite/img/pic-client-8.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default memo(SiteViewer);
