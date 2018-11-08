import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const RunnerTemplate = ({
  name,
  description,
  photo,
  goalDonation,
  fonzip,
  helmet,
}) => {
  return (
    <Grid>
      <Row className="sk-runner-detail">
        {helmet || ''}
        <Col sm={4}>
          <img
            className="sk-runner-detail-photo"
            style={{ width: '100%' }}
            src={photo}
            alt={name}
          />
        </Col>
        <Col xs={8}>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>
            <strong>Hedeflediğim Bağış Miktarı: </strong>
            {goalDonation} TL
          </p>
          <a href={fonzip} target="_blank" rel="noopener noreferrer">
            Bağış Yap
          </a>
        </Col>
      </Row>
    </Grid>
  );
};

RunnerTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  name: PropTypes.string,
  photo: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
};

const Runner = ({ data }) => {
  const { markdownRemark: runner } = data;

  return (
    <Layout>
      <RunnerTemplate
        content={runner.html}
        description={runner.frontmatter.description}
        helmet={<Helmet title={`${runner.frontmatter.name} | Runner`} />}
        name={runner.frontmatter.name}
        photo={runner.frontmatter.photo}
        goalDonation={runner.frontmatter.goaldonation}
        totalDonation={runner.frontmatter.totaldonation}
        fonzip={runner.frontmatter.fonzip}
      />
    </Layout>
  );
};

Runner.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Runner;

export const pageQuery = graphql`
  query RunnerByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        name
        photo
        description
        fonzip
        goaldonation
      }
    }
  }
`;
