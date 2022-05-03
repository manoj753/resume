import React from 'react';

const Header = () => {
  return (
    <footer id="footer" className="footer">
      <ul className="social social-fixed">
        <li>
          <a
            href="https://www.facebook.com/verified_resume-102668161549193"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lni lni-facebook-filled" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/verifiedresume"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lni lni-linkedin-original" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Veri_Resume"
            target="_blank"
            rel="noreferrer"
          >
            <i className="lni lni-twitter-original" />
          </a>
        </li>
      </ul>
      <div className="copyright copyright-fixed d-none d-md-block">
        &copy; <a href="/">Verified Resume</a>
      </div>
    </footer>
  );
};

export default Header;
