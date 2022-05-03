import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Contactform from '../components/landing/Contactform';
import Footer from '../components/landing/Footer';
import '../../static/cdn-css/bootstrap.min.css';
import '../../static/css/index.css';

/* Image imports */
import banner from '../../static/images/archive/main-image.svg';
import banner1 from '../../static/images/web-page-images/Build Professional Resumes.svg';
import banner2 from '../../static/images/web-page-images/affordable pricing.svg';
import banner3 from '../../static/images/web-page-images/secure.svg';
import feature1 from '../../static/images/web-page-images/quick-easy-shre.svg';
import feature2 from '../../static/images/web-page-images/icons/choose multiple.svg';
import feature3 from '../../static/images/web-page-images/icons/invitte.svg';
import feature4 from '../../static/images/web-page-images/icons/blockchain.svg';
import feature5 from '../../static/images/web-page-images/icons/qr.svg';
import feature6 from '../../static/images/web-page-images/icons/digital wallet.svg';
import feature7 from '../../static/images/web-page-images/icons/business card.svg';
import feature8 from '../../static/images/web-page-images/icons/enable.svg';
import locker from '../../static/images/web-page-images/digital-locker.svg';
import visual from '../../static/images/images/asdasd.png';
import verification from '../../static/images/images/bus.png';
import security from '../../static/images/images/Layer4dsasdas.png';

const Home = () => {
  const { t } = useTranslation();

  const [isSubmit, setSubmit] = useState(false);
  const handleNewsletter = async (e) => {
    e.preventDefault();
    setSubmit(true);

    await emailjs
      .sendForm(
        'service_v1ctyzm',
        'template_wi1gncs',
        e.target,
        'user_wkFHM1BYn6lI0g2atxSGX',
      )
      .then(
        (response) => {
          if (response.status === 200) {
            swal.fire({
              title: 'Thank you for subscribing !',
              text: 'We have received your newsletter subscription request.',
              icon: 'success',
              showConfirmButton: false,
              allowOutsideClick: false,
              showCloseButton: true,
            });
          }
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        },
      );

    setSubmit(false);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/`} />
      </Helmet>

      <div className="container-fluid header">
        <Header />
        <div className="banner__image">
          <img
            src={banner}
            className="img-fluid float-right"
            alt="Team process banner"
          />
        </div>

        <div className="container banner__part">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 banner__title">
              <h3>
                Professional
                <br />
                Resume Builder
              </h3>
              <p>
                Easy to use templates to create a professional Resume/CV in
                minutes
              </p>
              <a href="/app/dashboard" className="banner__button">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="scrollToTop">
        <i className="material-icons">arrow_upward</i>
      </button>
      <div className="container mt-4 plat-form">
        <div className="row">
          <div className="platform__heading col-md-12 col-lg-12 text-center">
            <h3>best platform</h3>
            <p>to create your professional resume</p>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="platform1 text-center">
              <img src={banner1} alt="banner1" style={{ display: 'inline' }} />
              <h3 className="platform__title">Easy to use</h3>
              <p>
                Build a Professional Resume in minutes selecting from a variety
                of templates to match your personality and your profession
              </p>
              {/* <a href="#" className="icon__button">
                Learn more
                <i className="fa fa-long-arrow-right fa-lg arrow-rt" />
              </a> */}
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="platform1 text-center">
              <img src={banner2} alt="banner2" style={{ display: 'inline' }} />
              <h3 className="platform__title">Affordable Pricing</h3>
              <p>
                Choose from inexpensive pricing plans to utilize premium
                features that will enhance your resume and improve your image
              </p>
              {/* <a href="#" className="icon__button">
                Learn more
                <i className="fa fa-long-arrow-right fa-lg arrow-rt" />
              </a> */}
            </div>
          </div>
          <div className="col-md-4 col-lg-4">
            <div className="platform1 text-center">
              <img src={banner3} alt="banner3" style={{ display: 'inline' }} />
              <h3 className="platform__title">Secure & Reliable</h3>
              <p>
                Verified Resume is the first resume solution with built-in
                blockchain technology, which will add credibility both
                personally and professionally
              </p>
              {/* <a href="#" className="icon__button">
                Learn more
                <i className="fa fa-long-arrow-right fa-lg arrow-rt" />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="quick">
        <div className="container quick__head text-center">
          <div className="quick-head">
            <h6>Quick, Easy and Secure</h6>
            {/* <h4>
              Verified Resume offers a Blockchain Secured - Digital Locker
              (Coming soon) to keep your certified resume safe and secure
            </h4> */}
          </div>
        </div>
        <div className="container-fluid quick__content">
          <div className="quick__image">
            <img src={feature1} alt="feature1" />
          </div>
          <div className="quick__cont">
            <div className="quick__right">
              <img src={feature2} alt="feature2" />
              <p>Choose from multiple templates and designs</p>
            </div>
            <div className="quick__right">
              <img src={feature3} alt="feature3" />
              <p>Create a Professional Webpage and invite employers to view</p>
            </div>
            <div className="quick__right">
              <img src={feature4} alt="feature4" />
              <p>
                Have your resume profile verified using blockchain technology
              </p>
            </div>
            <div className="quick__right">
              <img src={feature5} alt="feature5" />
              <p>All resumes will be assigned a QR code</p>
            </div>
            <div className="quick__right">
              <img src={feature6} alt="feature6" />
              <p>
                Store your resume in your digital wallet (COMING IN 2ND QTR
                2021)
              </p>
            </div>
            <div className="quick__right">
              <img src={feature7} alt="feature7" />
              <p>
                Design a digital business card with a QR code (COMING IN 2ND QTR
                2021)
              </p>
            </div>
            <div className="quick__right">
              <img src={feature8} alt="feature8" />
              <p>Create a customized Cover Letter to compliment your resume</p>
            </div>
          </div>
        </div>
      </div>
      <section className="digital" style={{ display: 'none' }}>
        <div className="container">
          <div className="col-lg-12 col-md-12 col-sm-12 digital__head text-center">
            <p className="digital__para">Quick, Easy and Secure</p>
            <h3 className="digital__head">
              Offering Blockchain Secured Digital Locker <br />
              to keep your Certificate Safe and Secure
            </h3>
            <a className="digital__btn" href="#">
              Learn more
              <i className="fa fa-long-arrow-right fa-lg arrow-rt" />
            </a>
          </div>

          <div className="digital__img">
            <img src={locker} className="digital__image" alt="locker" />
          </div>
        </div>
      </section>
      <section className="newsletter">
        <div className="newsletter__body">
          <div className="newsletter__heading">
            <p>Get the latest updates and offers by</p>
            <h6>Subscribing to our newsletter</h6>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="newsletter__left">
                  <p className="news__text">
                    Verified Resume likes to keep our clients informed on
                    industry trends, tips on finding the perfect job, access to
                    job recruiters, and job boards. Add your email to our
                    mailing list to be included in our monthly newsletters.
                  </p>
                  <form onSubmit={handleNewsletter}>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="user_email"
                      className="news__input"
                      style={{ width: 'auto' }}
                      disabled={isSubmit}
                    />
                    <button type="submit" className="news__btn">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card__section">
        <div className="container">
          <div className="title">
            <h3>
              Use Verified Resume to develop the resume that will set you apart
              from other competitive candidates
            </h3>
          </div>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div className="column__card">
                <div className="card">
                  <img className="card__img" src={visual} alt="visual" />
                  <div className="panel">
                    <span className="title">Visual Appeal</span>
                    <p>
                      Your resume should be a visual snapshot of your
                      professional history. When a company reviews resumes for
                      open positions, they seek specific profiles.
                    </p>
                    <span className="breaker" />
                    <a
                      className="card__link"
                      data-toggle="modal"
                      data-target="#myModal1"
                      href="#"
                    >
                      <i className="fa fa-angle-double-right fa-lg" /> Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="myModal1">
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title">Visual Appeal</h1>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Your resume should be a visual snapshot of your
                        professional history. When a company reviews resumes for
                        open positions, they seek specific profiles.
                      </p>
                      <p>
                        Your resume has one opportunity to make an impact on the
                        person doing the screening. If your resume is not clear,
                        concise, easy to read, and focused, you might miss the
                        opportunity that you&apos;ve been waiting for.
                      </p>

                      <p>
                        We offer the world&apos;s first resume builder with
                        blockchain technology. All resumes are assigned a unique
                        QR code that allows you to reliably and securely market
                        yourself. Digital security is more important than ever,
                        as the world has become dependent on the digital
                        marketplace.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div className="column__card">
                <div className="card">
                  <img
                    className="card__img"
                    src={verification}
                    alt="verification"
                  />
                  <div className="panel">
                    <span className="title">Verified Resume Verification</span>
                    <p>
                      We&apos;ve added a feature for professionals that allows
                      your resume to be verified for accuracy.
                    </p>
                    <span className="breaker" />
                    <a
                      className="card__link"
                      data-toggle="modal"
                      data-target="#myModal2"
                      href="#"
                    >
                      <i className="fa fa-angle-double-right fa-lg" /> Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="myModal2">
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title">
                        Verified Resume Verification
                      </h1>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        We&apos;ve added a feature for professionals that allows
                        your resume to be verified for accuracy. Many large
                        organizations spend a large amount of time and money
                        verifying the accuracy of data on resumes. They want to
                        ensure that the person they hire is the same person they
                        claim to be on their resume. With Verified Resume
                        Verification, we verify your resume and, upon
                        completion, assign a certification stamp to your resume,
                        which confirms that your resume has been verified for
                        accuracy. This adds an additional level of credibility
                        to your resume and increases your chances of landing
                        your dream job.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
              <div className="column__card">
                <div className="card">
                  <img className="card__img" src={security} alt="security" />
                  <div className="panel">
                    <span className="title">Blockchain security </span>
                    <p>
                      Resumes are the short form of all your skills,
                      qualifications and other job experiences that makes you
                      eligible for a suitable position...
                    </p>
                    <span className="breaker" />
                    <a
                      className="card__link"
                      data-toggle="modal"
                      data-target="#myModal3"
                      href="#"
                    >
                      <i className="fa fa-angle-double-right fa-lg" /> Read more
                    </a>
                  </div>
                </div>
              </div>
              <div className="modal fade" id="myModal3">
                <div className="modal-dialog modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title">Blockchain security</h1>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                    </div>
                    <div className="modal-body">
                      <p>
                        Resumes are the short form of all your skills,
                        qualifications and other job experiences that makes you
                        eligible for a suitable position. In short, your resume
                        lists your asset and the shreds of evidence that will
                        help ensure your future dream job. It takes years to
                        gather all the certificates, diplomas, and experience to
                        create your qualifications.
                      </p>
                      <p>
                        Keeping in mind the value of your documents, privacy and
                        safety is the reason why we provide blockchain-based
                        security. Ultimate document protection where all the
                        certificates of your experience and qualifications will
                        be tamper-proof and privately accessible for you and
                        visible to the recruiters.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card__button">
            <a href="/app/dashboard" className="card__viewbtn">
              Create resume
            </a>
          </div>
        </div>
      </section>
      <Contactform />
      <Footer />
    </Wrapper>
  );
};

export default memo(Home);
