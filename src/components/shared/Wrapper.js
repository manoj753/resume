import React, { memo, useEffect } from 'react';
import { Slide, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import ModalRegistrar from '../../modals/ModalRegistrar';

const Wrapper = ({ children }) => {
  useEffect(() => {
    toast.configure({
      role: 'alert',
      hideProgressBar: true,
      transition: Slide,
      closeButton: false,
      position: 'bottom-right',
      pauseOnFocusLoss: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Verified Resume</title>
        <meta
          name="description"
          content="Build a Professional Resume in minutes selecting from a variety of templates to match your personality and your profession"
        />
        <link rel="canonical" href="http://verifiedresume.me" />
        <meta property="og:url" content="http://verifiedresume.me" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Build a Professional Resume in minutes selecting from a variety of templates to match your personality and your profession"
        />
      </Helmet>

      {children}

      <ModalRegistrar />
    </>
  );
};

export default memo(Wrapper);
