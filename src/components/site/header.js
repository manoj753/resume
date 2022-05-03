import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header header-fixed">
      <div className="header-bg" />
      <div className="container-fluid clearfix">
        <div className="brand">
          <a href="#Intro">
            <div className="brand-name font-custom">Vicky</div>
          </a>
        </div>
        <button className="nav-toggle-btn a-nav-toggle">
          <span className="nav-toggle">
            <span className="stick stick-1" />
            <span className="stick stick-2" />
          </span>
        </button>
        <div className="header-content d-none d-md-block">
          <div className="row">
            <div className="col-md-3">
              <div className="header-tagline">
                art direction
                <br /> design
              </div>
            </div>
            <div className="col-md-9">
              <div className="header-contacts">
                <div className="header-contact-item">
                  Call me.&nbsp;{' '}
                  <a href="tel:+7068980751" className="phone-link">
                    (+106) 898-0751
                  </a>
                </div>
                <div className="header-contact-divider">/</div>
                <div className="header-contact-item">
                  <a href="" className="mail-link">
                    <span
                      className="__cf_email__"
                      data-cfemail="452d243c29203c6b2120362c222b052228242c296b262a28"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hide-menu a-nav-toggle" />
      <div className="menu">
        <nav className="menu-main" id="accordion">
          <ul id="menuMain">
            <li data-menuanchor="Intro" className="active">
              <a href="#Intro">Intro</a>
            </li>
            <li data-menuanchor="Services">
              <a href="#Services">Services</a>
            </li>
            <li data-menuanchor="Projects">
              <a href="#Projects">Projects</a>
            </li>
            <li data-menuanchor="Awards">
              <a href="#Awards">Awards</a>
            </li>
            <li data-menuanchor="Experience">
              <a href="#Experience">Experience</a>
            </li>
            <li data-menuanchor="Clients">
              <a href="#Clients">Clients</a>
            </li>
            <li data-menuanchor="Testimonials">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li data-menuanchor="Contact">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="menu-footer">
          <ul className="social social-rounded">
            <li>
              <a href="#">
                <i className="lni lni-twitter-filled" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="lni lni-behance-original" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="lni lni-instagram-original" />
              </a>
            </li>
          </ul>
          <div className="menu-copyright">&copy; Verified Resume 2021</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
