import React from 'react';
import { Row } from 'react-flexbox-grid';
import parkour from '../img/parkour.jpg';

const Parkours = () => {
  return (
    <React.Fragment>
      <hr />
      <h2 id="parkurlar">Parkurlar</h2>
      <Row>
        <img src={parkour} style={{ width: '100%' }} alt="" />
      </Row>
    </React.Fragment>
  );
};

export default Parkours;
