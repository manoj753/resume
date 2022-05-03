/* eslint-disable no-console */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';

import send from '../../../static/images/web-page-images/send us message.svg';

const Contactform = () => {
  const [isSubmit, setSubmit] = useState(false);
  const [inputs, setInputs] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    await emailjs
      .sendForm(
        'service_v1ctyzm',
        'template_nwi5jem',
        e.target,
        'user_wkFHM1BYn6lI0g2atxSGX',
      )
      .then(
        (response) => {
          if (response.status === 200) {
            swal.fire({
              title: 'Thank you for contacting !',
              text:
                'We have received your message, we will reply you back soon.',
              icon: 'success',
              showConfirmButton: false,
              allowOutsideClick: false,
              showCloseButton: true,
            });
          }
        },
        (error) => {
          console.log(error.text);
        },
      );

    setSubmit(false);
  };

  return (
    <section className="form__section blurftr-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form__left">
              <img src={send} className="form__img" alt="send" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="form__right">
              <form onSubmit={handleSubmit}>
                <h2>Send us a message</h2>
                <div className="inputBox">
                  <input
                    type="text"
                    name="user_name"
                    value={inputs.name}
                    onChange={handleChange}
                    required="required"
                  />
                  <span>Your Name*</span>
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    name="user_email"
                    value={inputs.email}
                    onChange={handleChange}
                    required="required"
                  />
                  <span>Your Email*</span>
                </div>
                <div className="inputBox">
                  <textarea
                    name="message"
                    value={inputs.message}
                    onChange={handleChange}
                    required="required"
                  />
                  <span>Your Message*</span>
                </div>
                <div className="check">
                  <input
                    className="checkBox"
                    type="checkbox"
                    required="required"
                  />
                  <span className="check__text">
                    By sending this message, you confirm that you have read and
                    agreed to our privacy-policy.
                  </span>
                </div>
                <div className="inputBox">
                  <button
                    type="submit"
                    className="form__button"
                    disabled={isSubmit}
                  >
                    Send <i className="fa fa-angle-double-right fa-lg" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactform;
