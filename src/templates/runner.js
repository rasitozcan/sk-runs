import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const RunnerTemplate = ({
  content,
  contentComponent,
  description,
  name,
  photo,
  helmet,
}) => {
  const RunnerContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {name}
            </h1>
            <p>{description}</p>
            <RunnerContent content={content} />
          </div>
        </div>
      </div>
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
      }
    }
  }
`;
