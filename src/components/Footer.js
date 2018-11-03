import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer className="sk-nav sk-footer">
      <Grid>
        <Row middle="xs" className="sk-nav-row">
          <Col sm={2}>
            <Link to="/">
              <img
                src={logo}
                alt="Sulukule Koşuyor"
                style={{ width: '88px' }}
              />
            </Link>
          </Col>
          <Col sm={10} />
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;
