import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';

/*
<Link className="navbar-item" to="/about">
  About
</Link>
*/

const Navbar = () => (
  <nav className="sk-nav">
    <Grid>
      <Row middle="xs" className="sk-nav-row">
        <Col xs={12}>
          <Link to="/">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </Link>
          <div className="sk-nav-links">
            <Link className="sk-nav-links-link" to="/about">
              About
            </Link>
            <Link className="sk-nav-links-link" to="/products">
              Products
            </Link>
          </div>
        </Col>
      </Row>
    </Grid>
  </nav>
);

export default Navbar;
