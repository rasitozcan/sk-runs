import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Runner from './Runner';
import { navigate } from 'gatsby';

class Runners extends Component {
  state = {
    dataset: 1,
  };
  showMore(e) {
    this.setState(state => ({
      dataset: state.dataset + 1,
    }));
  }
  render() {
    const { data, showAll } = this.props;
    const { dataset } = this.state;
    return (
      <React.Fragment>
        <h2 id="kosucularimiz">Koşucularımız</h2>
        <Row>
          {data.map(({ node: runner }, index) => {
            if (!showAll && dataset * 4 < index + 1) {
              return false;
            }
            return (
              <Col xs={12} sm={6} md={3} key={runner.id}>
                <Runner
                  name={runner.frontmatter.name}
                  description={runner.frontmatter.description}
                  url={runner.frontmatter.photo}
                  fonzip={runner.frontmatter.fonzip}
                  slug={runner.fields.slug}
                />
              </Col>
            );
          })}
        </Row>
        {this.props.data.length >= this.state.dataset * 4 &&
          !showAll && (
            <Row center="xs">
              <Col sm={4}>
                <button className="sk-button" onClick={e => this.showMore(e)}>
                  Daha Fazla
                </button>
              </Col>
              <Col sm={4}>
                <button
                  className="sk-button sk-button--inverted"
                  onClick={e => navigate('/kosucular')}
                >
                  Tümünü Gör
                </button>
              </Col>
            </Row>
          )}
      </React.Fragment>
    );
  }
}

export default Runners;
