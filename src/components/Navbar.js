import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.png';
import { Grid, Row, Col } from 'react-flexbox-grid';

/*
<Link className="navbar-item" to="/about">
  About
</Link>
*/

const Navbar = ({ handleClick }) => (
  <nav className="sk-nav sk-nav-topnav">
    <Grid>
      <Row middle="xs" className="sk-nav-row">
        <Col xs={12} style={{ height: '30px' }}>
          <Link to="/" style={{ display: 'inline-block' }}>
            <img src={logo} alt="Sk Runs" />
          </Link>
          <div className="sk-nav-links">
            {/* <Link className="sk-nav-links-link" to="/kosucular">
              Koşucularımız
            </Link> */}
            <a
              className="sk-nav-links-link"
              href="#kosucularimiz"
              onClick={e => handleClick(e)}
            >
              Koşucularımız
            </a>
            <a
              className="sk-nav-links-link"
              href="#donations"
              onClick={e => handleClick(e)}
            >
              Bağışlar
            </a>
            <a
              className="sk-nav-links-link"
              href="#parkurlar"
              onClick={e => handleClick(e)}
            >
              Parkurlar
            </a>
            <a
              className="sk-nav-links-link"
              href="#iletisim"
              onClick={e => handleClick(e)}
            >
              İletişim
            </a>
          </div>
        </Col>
      </Row>
    </Grid>
  </nav>
);

export default Navbar;
