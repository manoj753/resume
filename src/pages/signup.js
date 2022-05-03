import React, { memo, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from '@reach/router';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Button from '../components/shared/Button';
import UserContext from '../contexts/UserContext';

import '../../static/css/register.css';
import bg from '../../static/img/Archive/main-image.png';

const Signup = () => {
  const { t } = useTranslation();
  const [isLoadingRegister, setLoadingRegister] = useState(false);
  const { registerWithEmail } = useContext(UserContext);
  const [creds, setCreds] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreds((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = creds;
    setLoadingRegister(true);
    await registerWithEmail(firstname, lastname, email, password);
    setLoadingRegister(false);
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/signup`} />
      </Helmet>
      <div className="container-fluid header">
        <Header />
      </div>
      <section className="navbar_section">
        <div className="container-fluid">
          <div className="bg_image">
            <img src={bg} className="img-fluid float-right" alt="background" />
          </div>
        </div>
      </section>
      <section className="login_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 login_form">
              <label className="login_label">
                <h3>Register</h3>
              </label>
              <br />
              <label>
                <span>
                  Quick, Easy and Secure - Design your Professional Resume
                </span>
              </label>
              <br />
              <div className="login-field py-3">
                <i className="fa fa-user-circle login_form_icon" />
                <input
                  type="text"
                  className="form-control pl-5 py-4"
                  placeholder="First Name"
                  name="firstname"
                  value={creds.firstname}
                  onChange={handleChange}
                  required="required"
                />
              </div>
              <div className="login-field py-3">
                <i className="fa fa-user-circle login_form_icon" />
                <input
                  type="text"
                  className="form-control pl-5 py-4"
                  placeholder="Last Name"
                  name="lastname"
                  value={creds.lastname}
                  onChange={handleChange}
                  required="required"
                />
              </div>
              <div className="login-field py-3">
                <i className="fa fa-envelope login_form_icon" />
                <input
                  type="email"
                  className="form-control pl-5 py-4"
                  placeholder="Email"
                  name="email"
                  value={creds.email}
                  onChange={handleChange}
                  required="required"
                />
              </div>
              <div className="login-field py-3">
                <i className="fa fa-key login_form_icon" />
                <input
                  type="password"
                  className="form-control pl-5 py-4"
                  placeholder="Password"
                  name="password"
                  value={creds.password}
                  onChange={handleChange}
                  required="required"
                />
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  <div className="float-right" id="login_btn">
                    <Button
                      className="w3-button btn-primary"
                      isLoading={isLoadingRegister}
                      onClick={handleSubmit}
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row ver_gap_30px">
                <div className="col-md-4 col-xs-4 col-sm-4">
                  <hr />
                </div>
                <div className="col-md-4 text-center col-xs-4 col-sm-4">
                  <span>Or</span>
                </div>
                <div className="col-md-4 col-xs-4 col-sm-4">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-7 text-left">Already have an account ?</div>
                <div className="col-5 text-right">
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Sign in here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default memo(Signup);
