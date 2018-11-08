import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import PieChart from 'react-svg-piechart';

const DonationChart = ({ data }) => {
  let goal = data[0].node.frontmatter.gdonation;
  let total = data[0].node.frontmatter.tdonation;

  goal = isNaN(goal) ? 0 : parseInt(goal);
  total = isNaN(total) ? 0 : parseInt(total);

  return (
    <React.Fragment>
      <hr />
      <h2 id="donations">Bağışlar</h2>
      <Row className="sk-donation-chart" middle="sm">
        <Col md={4} className="sk-donation-chart-goal">
          <h3>Hedeflenen Toplam Bağış</h3>
          <span className="value">{goal}</span>
          <span> TL</span>
        </Col>
        <Col md={4} className="sk-donation-chart-percentage">
          <PieChart
            data={[
              { title: 'Hedeflenen', value: goal, color: '#FA5A72' },
              { title: 'Toplanan', value: total, color: '#FC846C' },
            ]}
            expandOnHover
            strokeWidth={0}
          />
          <div className="value">
            %{parseFloat((100 * total) / goal).toFixed(1)}
          </div>
        </Col>
        <Col md={4} className="sk-donation-chart-total">
          <h3>Toplanan Toplam Bağış</h3>
          <span className="value">{total}</span>
          <span> TL</span>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DonationChart;
