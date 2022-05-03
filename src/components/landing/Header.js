import { Link } from '@reach/router';
import { navigate } from 'gatsby';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
/* import ModalContext from '../../contexts/ModalContext'; */
import UserContext from '../../contexts/UserContext';
import Button from '../shared/Button';
/* import Logo from '../shared/Logo'; */

import menu from '../../../static/images/images/menu.png';

import logo from '../../../static/logo/logo.svg';

const Header = () => {
  const { t } = useTranslation();
  /* const { emitter, events } = useContext(ModalContext); */
  const { user, loading } = useContext(UserContext);

  let auth = false;
  if (user) auth = true;

  /* const handleLogin = () => emitter.emit(events.AUTH_MODAL); */

  const handleLogin = () => navigate('/login');

  const handleGotoApp = () => navigate('/app/dashboard');

  return (
    <header className="head mt-3 mb-3 row">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light head__custom-nav">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            {/* <Logo size="100px" className="logo shadow-lg" /> */}
            <img src={logo} alt="logo" />
          </Link>
          <a
            className="navbar-toggler"
            href="#"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <img src={menu} alt="menu" style={{ width: '50px' }} />
          </a>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="signin__button">
              {!auth ? (
                <Button
                  onClick={handleLogin}
                  isLoading={loading}
                  className="sign_in"
                >
                  {t('shared.buttons.login')}
                </Button>
              ) : (
                <Button
                  onClick={handleGotoApp}
                  isLoading={loading}
                  className="sign_in"
                >
                  {t('landing.hero.goToApp')}
                </Button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
