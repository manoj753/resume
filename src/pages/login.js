import { navigate } from 'gatsby';
import React, { memo, useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from '@reach/router';
import Wrapper from '../components/shared/Wrapper';
import Header from '../components/landing/Header';
import Button from '../components/shared/Button';
import UserContext from '../contexts/UserContext';

import '../../static/css/login.css';
import bg from '../../static/img/Archive/main-image.png';

const Login = () => {
  const { t } = useTranslation();
  const [isLoadingRegister, setLoadingRegister] = useState(false);
  const [isLoadingGoogle, setLoadingGoogle] = useState(false);
  const [isShowPassword, setShowPassword] = useState(false);
  const { loginWithEmail, loginWithGoogle } = useContext(UserContext);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleShowPassword = () => {
    setShowPassword(!isShowPassword);
  };

  const handleKeypressShowPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    setLoadingRegister(true);
    const login = await loginWithEmail(email, password);
    setLoadingRegister(false);
    if (typeof login !== 'undefined' && login) navigate('/app/dashboard');
  };

  const handleSignInWithGoogle = async () => {
    setLoadingGoogle(true);
    const login = await loginWithGoogle();
    setLoadingGoogle(false);
    if (typeof login !== 'undefined' && login) navigate('/app/dashboard');
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{t('shared.appName')}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/login`} />
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
                <h3>Log in</h3>
              </label>
              <br />
              <label>
                <span>We&apos;re happy to see you again!</span>
              </label>
              <br />
              <div className="login-field py-3">
                <i className="fa fa-user-circle login_form_icon" />
                <input
                  type="email"
                  className="form-control pl-5 py-4"
                  placeholder="Email id"
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                  required="required"
                  autoFocus
                />
              </div>

              <div className="login-field py-3">
                <i className="fa fa-key login_form_icon" />
                <input
                  type={isShowPassword ? 'text' : 'password'}
                  className="form-control pl-5 py-4"
                  placeholder="Password"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                  required="required"
                />
                <span
                  className="loginShowPassword"
                  onClick={handleShowPassword}
                  onKeyPress={handleKeypressShowPassword}
                  role="button"
                  tabIndex="-1"
                >
                  <i
                    className={`fa ${
                      isShowPassword ? 'fa-eye-slash' : 'fa-eye'
                    }`}
                  />
                </span>
              </div>
              <div className="row mb-3">
                <div className="col-6 text-left">
                  <div className="checkbox" id="log_form_rem_btn">
                    <label>
                      <input
                        type="checkbox"
                        value=""
                        style={{ width: 'auto' }}
                      />
                      <span style={{ paddingLeft: '5px' }}>Remember Me</span>
                    </label>
                  </div>
                </div>
                <div className="col-6 text-right">
                  <div className="float-right" id="login_btn">
                    <Button
                      className="w3-button btn-primary"
                      isLoading={isLoadingRegister}
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 text-left">
                  <Link to="/signup" style={{ textDecoration: 'none' }}>
                    Register now
                  </Link>
                </div>
                <div className="col-6 text-right">
                  <a
                    href="#"
                    className="color-light_black"
                    style={{ textDecoration: 'none' }}
                  >
                    Forgot Password ?
                  </a>
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
              <div className="ver_gap_30px" style={{ marginBottom: '3em' }}>
                <div className="w3-row w3-stretch">
                  <div className="col-md-12">
                    <i
                      className="fa fa-2x fa-google google_btn_icon google_icon_back"
                      aria-hidden="true"
                      style={{ color: 'white' }}
                    />
                    <button
                      className="btn width_100 google_btn font_12 white_font"
                      isLoading={isLoadingGoogle}
                      onClick={handleSignInWithGoogle}
                    >
                      LOGIN WITH GOOGLE
                    </button>
                  </div>
                </div>
                {/* <div className="w3-row w3-stretch ver_gap_10px">
                <div className="col-md-12">
                  <i
                    className="fa fa-2x fa-facebook-square fb_btn_icon fb_icon_back"
                    aria-hidden="true"
                    style={{ color: 'white' }}
                  />
                  <button className="btn width_100 fb_btn font_12 white_font">
                    LOGIN WITH FACEBOOK
                  </button>
                </div>
              </div>
              <div className="w3-row w3-stretch ver_gap_10px">
                <div className="col-md-12">
                  <i
                    className="fa fa-2x fa-twitter twit_btn_icon twit_icon_back"
                    aria-hidden="true"
                    style={{ color: 'white' }}
                  />
                  <button className="btn width_100 twit_btn font_12 white_font">
                    LOGIN WITH TWITTER
                  </button>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default memo(Login);
