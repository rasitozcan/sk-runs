import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import parkour from '../img/parkour.jpg';

const Parkours = () => {
  return (
    <React.Fragment>
      <hr />
      <h2 id="parkurlar">Parkurlar</h2>
      <Row>
        <Col xs={12}>
          <img
            src={parkour}
            style={{ width: '100%', height: 'auto' }}
            alt="Parkurlar"
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Parkours;
