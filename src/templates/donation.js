import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const DonationsPageTemplate = ({
  title,
  goaldonation,
  totaldonation,
}) => {
  return (
    <Grid>
      <Row>
        <Col sm={12}>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>{goaldonation}</Col>
        <Col sm={6}>{totaldonation}</Col>
      </Row>
    </Grid>
  );
};

DonationsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  goaldonation: PropTypes.number.isRequired,
  totaldonation: PropTypes.number.isRequired,
};

const DonationsPage = ({ data }) => {
  const { markdownRemark: donation } = data;

  return (
    <Layout>
      <DonationsPageTemplate
        title={donation.frontmatter.title}
        goaldonation={donation.frontmatter.gdonation}
        totaldonation={donation.frontmatter.tdonation}
      />
    </Layout>
  );
};

DonationsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DonationsPage;

export const donationsPageQuery = graphql`
  query DonationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        gdonation
        tdonation
      }
    }
  }
`;
