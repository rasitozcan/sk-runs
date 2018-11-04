import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default () => (
  <React.Fragment>
    <hr />
    <h2 id="iletisim">İletişim</h2>
    <Row className="sk-contact-form">
      <Col md={4}>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Row>
            <Col sm={12}>
              <label>Ad:</label>
            </Col>
            <Col sm={12}>
              <input required type="text" name="name" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>Soyad:</label>
            </Col>
            <Col sm={12}>
              <input required type="text" name="lastname" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>E-posta:</label>
            </Col>
            <Col sm={12}>
              <input required type="text" name="email" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>Mesaj:</label>
            </Col>
            <Col sm={12}>
              <textarea required name="message" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <label>Eğer bot/robot değilseniz bu alanı doldurmayın:</label>
            </Col>
            <Col sm={12}>
              <input name="bot-field" />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <button className="sk-button" type="submit">
                Gönder
              </button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  </React.Fragment>
);
