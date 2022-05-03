import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

const SiteWrapper = ({ children }) => {
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
    </>
  );
};

export default memo(SiteWrapper);
