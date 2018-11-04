import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Grid, Row, Col } from 'react-flexbox-grid';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Grid>
      <Row>
        <Col sm={12}>
          <h2>{title}</h2>
          <PageContent className="content" content={content} />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <a
            onClick={e => navigate('/')}
            style={{ marginTop: 20 }}
            className="sk-button"
          >
            Geri Dön
          </a>
        </Col>
      </Row>
    </Grid>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
