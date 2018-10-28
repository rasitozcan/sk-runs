import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Grid } from 'react-flexbox-grid';
import Jumbotron from '../components/Jumbotron';
import Runners from '../components/Runners';
import DonationChart from '../components/DonationChart';
import Parkours from '../components/Parkours';
import ContactForm from '../components/ContactForm';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: runners } = data.allMarkdownRemark;

    return (
      <Layout>
        <Grid>
          <Jumbotron />
          <Runners data={runners} />
          <DonationChart goal={109600} total={10000} />
          <Parkours />
          <ContactForm />
        </Grid>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export const pageQuery = graphql`
  query IndexQuery {
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
          }
        }
      }
    }
  }
`;
