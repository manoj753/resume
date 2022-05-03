import { Redirect, Router } from '@reach/router';
import React, { memo } from 'react';
import Wrapper from '../components/shared/SiteWrapper';
import SiteViewer from './site/view';
import NotFound from './404';

const ResumeRouter = () => (
  <Wrapper>
    <Router>
      <Redirect noThrow from="/site" to="/" exact />
      <SiteViewer path="site/:id" />
      <NotFound default />
    </Router>
  </Wrapper>
);

export default memo(ResumeRouter);
