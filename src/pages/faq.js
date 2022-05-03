import { Link } from '@reach/router';
import React from 'react';
import { Helmet } from 'react-helmet';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Wrapper from '../components/shared/Wrapper';

const FrequentlyAskedQuestions = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Frequently Asked Questions</title>
      </Helmet>

      <div className="md:w-1/2 container px-8 md:px-0 py-16 grid gap-12">
        <div className="flex items-center">
          <Link to="/">
            <MdKeyboardArrowLeft size="32px" />
          </Link>
          <h1 className="ml-6 text-4xl font-semibold">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default FrequentlyAskedQuestions;
