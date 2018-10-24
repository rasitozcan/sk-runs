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
  fonzip,
  helmet,
}) => {
  const RunnerContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <Col xs={3}>
        <RunnerBase
          name={name}
          description={description}
          url={photo}
          fonzip={fonzip}
        />
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
  const { markdownRemark: runner } = data;

  return (
    <Layout>
      <RunnerTemplate
        content={runner.html}
        contentComponent={HTMLContent}
        description={runner.frontmatter.description}
        helmet={<Helmet title={`${runner.frontmatter.name} | Runner`} />}
        name={runner.frontmatter.name}
        photo={runner.frontmatter.photo}
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
      }
    }
  }
`;
