import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Runners from '../components/Runners';
import { Grid } from 'react-flexbox-grid';

const AllRunnersPage = ({ data }) => {
  debugger;
  const { edges: runners } = data.allMarkdownRemark;

  return (
    <Layout>
      <Grid>
        <Runners data={runners} showAll={true} />
      </Grid>
    </Layout>
  );
};

AllRunnersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AllRunnersPage;

export const allRunnersPageQuery = graphql`
  query allRunnersPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "runner" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            name
            photo
            description
            fonzip
            goaldonation
            totaldonation
          }
        }
      }
    }
  }
`;
