import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

export default () => (
  <Row center="xs" className="sk-jumbotron">
    <Col sm={5}>
      {/* <span className="sk-jumbotron-caption">KOŞUYORUZ</span> */}
      <h1>Sulukule için Koşuyorum, Okulu Terki Önlüyorum</h1>
      <p>
        <i>Sulukule için Koşuyorum, Okulu Terki Önlüyorum </i>
        <br /> Eğitimde fırsat eşitliğini sağlamak için koşuyoruz. Senin de
        desteğinle bir adim daha ileriye.
      </p>
    </Col>
  </Row>
);
