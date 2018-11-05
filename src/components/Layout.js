import React from 'react';
import Helmet from 'react-helmet';
import { navigate } from 'gatsby';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './index.scss';

const handleClick = (e, location) => {
  navigate('/');
};

const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet title="Sulukule Koşuyor" />
    <Navbar handleClick={handleClick} />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
