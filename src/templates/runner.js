import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { default as RunnerBase } from '../components/Runner';
import { Row, Col } from 'react-flexbox-grid';

export const RunnerTemplate = ({
  content,
  contentComponent,
  name,
  description,
  photo,
  helmet,
}) => {
  const RunnerContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <Col xs={3}>
        <RunnerBase name={name} description={description} url={photo} />
        <RunnerContent content={content} />
      </Col>
    </section>
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
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <RunnerTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={<Helmet title={`${post.frontmatter.name} | Runner`} />}
        name={post.frontmatter.name}
        photo={post.frontmatter.photo}
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
      }
    }
  }
`;
