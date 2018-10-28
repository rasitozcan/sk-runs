import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './index.scss';

const scroller = (e, node) => {
  e.preventDefault();
  const id = e.target.href.split('#')[1];
  const target = document.getElementById(id);
  if (target) window.scrollTo(0, target.offsetTop - 70);
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar handleClick={scroller} />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
