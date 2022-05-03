import React from 'react';
import { Link } from '@reach/router';

const Footer = () => {
  return (
    <footer className="page-footer font-small unique-color-dark">
      <div className="container">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0" />
          <div className="col-md-6 col-lg-7 text-center text-md-right" />
        </div>
      </div>
      <div className="container text-center text-md-left">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 box1">
            <p>
              We&apos;ve built the most sophisticated career site to help you
              find your dream job
            </p>
            <div className="icon">
              <a
                href="https://www.facebook.com/verified_resume-102668161549193"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook-f" />
              </a>
              <a
                href="https://www.linkedin.com/company/verifiedresume"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://twitter.com/Veri_Resume"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 box2">
            <h6 className="text-uppercase font-weight-bold">Useful Pages</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About Us</Link>
            </p>
            <p>
              <Link to="/pricing">Pricing</Link>
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 box2 p-0">
            <h6 className="text-uppercase font-weight-bold">
              Terms and condition
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a href="/termsconditions.html" target="_blank">
                Terms and condition
              </a>
            </p>
            <p>
              <a href="/privacypolicy.html" target="_blank">
                Privacy statements
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 box2">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <i className="fa fa-map-marker mr-4 mb-4" />
              <a href="#!">Delray Beach, Florida, USA</a>
            </p>
            <p>
              <i className="fa fa-phone mr-3 mb-4" />{' '}
              <a href="tel:15617070378">+1-561-707-0378</a>
            </p>
            <p>
              <i className="fa fa-envelope mr-3" />{' '}
              <a href="mailto:info@verifiedresume.me">info@verifiedresume.me</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
