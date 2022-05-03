import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode.react';
import TopNavbar from '../../components/dashboard/TopNavbar';

import '../../../static/css/dashboard.css';
import '../../../static/css/choose-resume.css';

import icon1 from '../../../static/icons/account/1.png';
import icon2 from '../../../static/icons/account/2.png';
import icon3 from '../../../static/icons/account/3.png';
/* import icon4 from '../../../static/icons/account/4.png'; */
import icon5 from '../../../static/icons/account/5.png';
/* import icon6 from '../../../static/icons/account/6.png';
import icon7 from '../../../static/icons/account/7.png';
import icon8 from '../../../static/icons/account/8.png';
import icon9 from '../../../static/icons/account/9.png'; */

const Account = () => {
  const { t } = useTranslation();
  const [isShowMS, setShowMS] = useState(false);

  return (
    <div>
      <Helmet>
        <title>{`Account | ${t('shared.appName')}`}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/app/account`} />
        <style type="text/css">
          {`
            .card-title {
                margin-top: 0.75rem;
                margin-bottom: 10px;
            }
          `}
        </style>
      </Helmet>

      <TopNavbar />

      <section className="display_section">
        <div className="container">
          <div className="col-12 p-0 text-center mt-5">
            <label>
              <h4>
                <strong>Account Settings</strong>
              </h4>
            </label>
            <p>Manage all account details here</p>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <div className="card c-bs">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="card-title">Personal information</h4>
                      <p>
                        Some info may be visible to recruiters if visibility
                        enabled.
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <img
                        src="https://www.gstatic.com/identity/boq/accountsettingsmobile/aboutme_scene_316x112_371ea487b68d0298cc54522403223de1.png"
                        alt="Recruiter"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        className="card text-center ml-auto mr-auto"
                        style={{ width: '13rem', minHeight: 'auto' }}
                      >
                        <img
                          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <button type="button" className="btn btn-primary">
                            Upload image
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>First name</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Last name</label>
                          <input type="password" className="form-control" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="1234 Main St"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Address 2</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, studio, or floor"
                          />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Zip</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label>State</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Country</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        Please check before submitting (previously saved resume
                        Info will not be changed)
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#" className="btn btn-lg btn-primary">
                        Update
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 mb-3">
              <div className="card c-bs">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="card-title">Contact information</h4>
                      <p>
                        Some info may be visible to recruiters if visibility
                        enabled.
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <img
                        src="https://www.gstatic.com/identity/boq/accountsettingsmobile/recovery_scene_316x112_a71256f365c17ad4f8a1b82c5b03a173.png"
                        alt="Recruiter"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="card-title">Emaid ID</h5>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="form-group col-12">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="example@mail.com"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="card-title">Mobile No</h5>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="form-group col-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="+1100110011"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>Email ID can&apos;t be changed</p>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#" className="btn btn-lg btn-primary">
                        Update
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="card c-bs">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="card-title">Change Password</h4>
                      <p>Enter both fields to change your password</p>
                    </div>
                    <div className="col-6 text-right">
                      <img
                        src="https://www.gstatic.com/identity/boq/accountsettingsmobile/signin_scene_316x112_9ab8cadd6080f72111aead1bedd3a9fd.png"
                        alt="Recruiter"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="card-title">Old Password</h5>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="form-group col-12">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="**********"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <h5 className="card-title">New Password</h5>
                    </div>
                    <div className="col-md-8">
                      <div className="form-row">
                        <div className="form-group col-12">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="**********"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>Use a strong password</p>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#" className="btn btn-lg btn-primary">
                        Update
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 text-center mt-5">
            <label>
              <h4>
                <strong>Subscription</strong>
              </h4>
            </label>
            <p>Manage your subscription from here</p>
          </div>
          <div className="row">
            <div className="col-12 mb-3">
              <div className="card c-bs">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h4 className="card-title">subscription information</h4>
                      <p>Find your current subscription status or upgrade</p>
                    </div>
                    <div className="col-6 text-right">
                      <img
                        src="https://www.gstatic.com/identity/boq/accountsettingsmobile/reservations_scene_316x112_166117b2f9a9fdcce83b20f77cf604e9.png"
                        alt="Recruiter"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4 ">
                      <div className="card card-fix-h">
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDYuNjA2IiBoZWlnaHQ9IjEwNi42MDYiIHZpZXdCb3g9IjAgMCAxMDYuNjA2IDEwNi42MDYiPgogIDxnIGlkPSJwcmVtaXVtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTA1Ljk4NSAtOTUxLjU4KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzI4MiIgZGF0YS1uYW1lPSJFbGxpcHNlIDI4MiIgY3g9IjUzLjMwMyIgY3k9IjUzLjMwMyIgcj0iNTMuMzAzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MDUuOTg1IDk1MS41OCkiIGZpbGw9IiMyYTMxM2YiIG9wYWNpdHk9IjAuMTU0Ii8+CiAgICA8cGF0aCBpZD0iUGF0aF8zODY5OCIgZGF0YS1uYW1lPSJQYXRoIDM4Njk4IiBkPSJNLTIzNS42MiwxNzguNzM3YTEuMTQ0LDEuMTQ0LDAsMCwwLS45ODItLjc4NmwtMjQuNC0yLjIzNi05LjY2OS0yMi41MTlhMS4xNCwxLjE0LDAsMCwwLTEuMDQ5LS42OTMsMS4xNDMsMS4xNDMsMCwwLDAtMS4wNTEuNjkzbC05LjY2OSwyMi41MTktMjQuNCwyLjIzNmExLjE0NCwxLjE0NCwwLDAsMC0uOTg0Ljc4NiwxLjEzOCwxLjEzOCwwLDAsMCwuMzM0LDEuMjEybDE4LjQyOSwxNi4xNTYtNS40MTYsMjMuOWExLjE0NiwxLjE0NiwwLDAsMCwuNDQ0LDEuMTc3LDEuMTQzLDEuMTQzLDAsMCwwLDEuMjU3LjA1OWwyMS4wNTgtMTIuNTM3LDIxLjA1NiwxMi41MzdhMS4xNTgsMS4xNTgsMCwwLDAsLjU4Ni4xNiwxLjEyNiwxLjEyNiwwLDAsMCwuNjcxLS4yMTksMS4xNDIsMS4xNDIsMCwwLDAsLjQ0NC0xLjE3N2wtNS40MTQtMjMuOSwxOC40MjktMTYuMTU2QTEuMTQyLDEuMTQyLDAsMCwwLTIzNS42MiwxNzguNzM3Wm0tMzYuMS0yMi4xOSw4LjYsMjAuMDM0LTguNiw5Ljg3OC04LjYtOS44NzhabS0zMi4yNjMsMjMuNDM5LDIxLjg0Ny0yLDguNTU0LDkuODIyLTE0LjAyNCw2LjUzN1ptMTcuMTc1LDE2LjUwNiwxMy45NDQtNi41djE2LjczMWwtMTguOCwxMS4xODlabTM1LjAyNiwyMS40MTktMTguOC0xMS4xODlWMTg5Ljk5MmwxMy45NDQsNi41Wm0tNC4wNTUtMjMuNTctMTQuMDI0LTYuNTM3LDguNTU0LTkuODIyLDIxLjg0NywyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIzMS4wMTMgODE3LjkzMSkiIGZpbGw9IiNmZmYiLz4KICA8L2c+Cjwvc3ZnPgo="
                          className="card-img-top p-3"
                          style={{ height: '165px' }}
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Premium (Monthly)</h5>
                          <p className="card-text">
                            is your current active subscription
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-fix-h">
                        <div className="card-body feature-list">
                          <h5 className="card-title">Features</h5>
                          <h5>
                            Cover letter{' '}
                            <span className="float-right">
                              <img src={icon1} alt="icon1" />
                            </span>
                          </h5>{' '}
                          <hr className="m-2" />
                          <h5>
                            PDF Download{' '}
                            <span className="float-right">
                              <img src={icon2} alt="icon2" />
                            </span>
                          </h5>{' '}
                          <hr className="m-2" />
                          <h5>
                            Blockchain your resume{' '}
                            <span className="float-right">
                              <img src={icon3} alt="icon3" />
                            </span>
                          </h5>{' '}
                          <hr className="m-2" />
                          <h5>
                            Personal card
                            <span className="float-right">
                              <img src={icon5} alt="icon5" />
                            </span>
                          </h5>
                          <hr className="m-2" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-fix-h">
                        <div className="card-body">
                          <div className="remain-time">
                            16<span>days</span>
                          </div>
                          <h5 className="card-title">
                            remaining of your subscription
                          </h5>
                          <p className="card-text">
                            For uninterrupted benefits you can subscribe to out
                            monthly/yearly packages.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <p>
                        You can get exclusive discounts on Yearly subscription
                      </p>
                    </div>
                    <div className="col-6 text-right">
                      <a href="#" className="btn btn-lg btn-primary">
                        Go to Pricing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 text-center mt-5">
            <label>
              <h4>
                <strong>Sharing Settings</strong>
              </h4>
            </label>
            <p>Manage all sharing details here</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card c-bs">
                <img
                  className="card-img-top p-3"
                  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/securitycheckup_scene_green_316x112_6c835cc5f6cd65b36c2a03a0a901660e.png"
                  alt="JobBoards"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Would you like to enable your Professional Webpage on your
                    profile?
                  </h5>
                </div>
                <hr />
                <div className="card-body p-0-125">
                  <div className="row">
                    <div className="col-6">
                      <h5>Enable</h5>
                    </div>
                    <div className="col-6 text-right">
                      <label className="switch">
                        <input
                          type="checkbox"
                          defaultChecked={isShowMS}
                          onChange={() => setShowMS(!isShowMS)}
                        />
                        <span className="switch-slider" />
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-body">
                  <p className="card-text">
                    You can manage from here if your profile can be shared as a
                    webpage or not.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-md-4 mb-3 ${isShowMS ? '' : 'd-none'}`}>
              <div className="card c-bs">
                <img
                  className="card-img-top p-3"
                  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/contacts_card_scene_316x112_30b26c263ec7d6c2839b403059092259.png"
                  alt="JobBoards"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Manage you Professional webpage data
                  </h5>
                </div>
                <hr />
                <div className="card-body p-0-125">
                  <div className="row">
                    <div className="col-12 text-center">
                      <a href="#" className="btn btn-md btn-primary">
                        Manage webpage
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-body">
                  <p className="card-text">
                    You can manage your Professional webpage data from here.
                  </p>
                </div>
              </div>
            </div>

            <div className={`col-md-4 mb-3 ${isShowMS ? '' : 'd-none'}`}>
              <div className="card c-bs">
                <QRCode
                  value="https://verifiedresume.me/site/hi1XWMit3ePQYQ2ND61zGGOcoLf2"
                  size="300"
                  renderAs="svg"
                  includeMargin
                  imageSettings={{
                    src: 'https://verifiedresume.me/favicon-32x32.png',
                    x: null,
                    y: null,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
                <hr className="m-1" />
                <div className="card-body">
                  <p className="card-text">
                    Scan this QR Code or visit{' '}
                    <a
                      href="https://verifiedresume.me/site/hi1XWMit3ePQYQ2ND61zGGOcoLf2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      verifiedresume.me/site/hi1XWMit3ePQYQ2ND61zGGOcoLf2
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Account;
