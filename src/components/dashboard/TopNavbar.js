import { Link } from 'gatsby';
import React, { memo } from 'react';
import Avatar from '../shared/Avatar';
/* import styles from './TopNavbar.module.css'; */

import logo from '../../../static/logo/logo.svg';
import menu from '../../../static/img/images/menu.png';

const TopNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-md navbar-dash"
      style={{
        background: '#fff !important',
        border: 'none',
        padding: '0',
        boxShadow: '0px 3px 15px #00000036',
      }}
    >
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo" width="275" className="dashboard-logo" />
        </Link>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/app/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/app/account">
                Account
              </Link>
            </li>
          </ul>
        </div>
        <Avatar className="ml-auto" />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon">
            <img src={menu} alt="menu" style={{ width: '30px' }} />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default memo(TopNavbar);
