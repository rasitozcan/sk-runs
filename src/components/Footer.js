import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer className="sk-nav sk-footer">
      <Grid>
        <Row middle="xs" className="sk-nav-row">
          <Col xs={12}>
            <Link to="/">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            <Link className="sk-nav-links-link" to="/about">
              About
            </Link>
            <Link className="sk-nav-links-link" to="/products">
              Products
            </Link>
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;
