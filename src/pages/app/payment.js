import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Paypal from 'gatsby-plugin-paypal';
import firebase from 'gatsby-plugin-firebase';
import swal from 'sweetalert2';
import UserContext from '../../contexts/UserContext';
import TopNavbar from '../../components/dashboard/TopNavbar';

import '../../../static/css/dashboard.css';
import '../../../static/css/choose-resume.css';
import premium from '../../../static/icons/pricing/premium.svg';

const Payment = ({ id }) => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  let amount;
  const productName = 'Premium Plan';
  let desc;
  if (id === 'm1') {
    amount = 9.99;
    desc = 'for one month';
  } else if (id === 'y1') {
    amount = 83.99;
    desc = 'for one year';
  } else {
    amount = 0;
    desc = '';
  }

  const handleSuccess = async () => {
    const userRef = firebase.database().ref(`users/${user.uid}`);
    user.userType = 2;
    await userRef.set(user);
    swal.fire({
      title: 'Thank you for your purchase !',
      text:
        'Your account is now upgraded to Premium plan, now you can use all premium templates and features.',
      icon: 'success',
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
    });
    navigate('/app/dashboard');
  };

  const handleError = () => {
    swal.fire({
      title: 'Payment Error !',
      text: 'Payment is canceled, you can try again.',
      icon: 'error',
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
    });
  };

  const handleCancel = () => {
    swal.fire({
      title: 'Payment Canceled !',
      text: 'Payment is canceled, you can try again.',
      icon: 'error',
      showConfirmButton: false,
      allowOutsideClick: false,
      showCloseButton: true,
    });
  };

  return (
    <div>
      <Helmet>
        <title>{`Payment | ${t('shared.appName')}`}</title>
        <link rel="canonical" href={`${t('shared.projectURL')}/user/payment`} />
      </Helmet>

      <TopNavbar />

      <section className="display_section">
        <div className="container">
          <div className="container-fluid">
            <label>
              <h4>
                <strong>Payment Confirmation</strong>
              </h4>
            </label>
            <div className="text_content">
              <p>
                After you click on Buy now button you&apos;ll be redirected to
                PayPal&apos;s payment gateway. Please confirm your purchase
                before buying
              </p>
            </div>
            <div className="row resumes_section">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card">
                  <div className="card-head head2 text-center">
                    <img src={premium} alt="premium" />
                    <h3>Premium</h3>
                  </div>
                  <div className="card-content">
                    <ul className="card-item">
                      <li className="card-list">Version of resume</li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Cover letter</li>
                      <small>
                        3 <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">PDF/Word Download</li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Format</li>
                      <small>
                        Standard <i className="fa fa-check" />
                      </small>
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Blockchain your resume</li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Extra Fonts</li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Premium Templates</li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Digital Wallet</li>
                      <i className="fa fa-check" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Professional page</li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Personal card with QR code</li>
                      <i className="fa fa-times" />
                    </ul>
                    <ul className="card-item">
                      <li className="card-list">Visibility to recruiters</li>
                      <i className="fa fa-times" />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Information</span>
                  <span className="badge badge-secondary badge-pill">1</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{productName}</h6>
                      <small className="text-muted">{desc}</small>
                    </div>
                    <span className="text-muted">${amount}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${amount}</strong>
                  </li>
                </ul>
                <Paypal
                  style={{
                    shape: 'rect',
                    color: 'blue',
                    layout: 'horizontal',
                    label: 'buynow',
                    tagline: false,
                  }}
                  shippingPreference="NO_SHIPPING"
                  amount={amount}
                  onApprove={handleSuccess}
                  onError={handleError}
                  onCancel={handleCancel}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;
