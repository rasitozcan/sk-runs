import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';
import banner from '../img/banner.png';
import parkour from '../img/parkour.jpg';
import Runner from '../components/Runner';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: runners } = data.allMarkdownRemark;

    return (
      <Layout>
        <Grid>
          <Row center="xs" className="sk-jumbotron">
            <Col xs={5}>
              <span className="sk-jumbotron-caption">KOŞUYORUZ</span>
              <h1>Sulukule için Koşuyorum, Okulu Terki Önlüyorum</h1>
              <p>
                <i>Sulukule için Koşuyorum, Okulu Terki Önlüyorum </i>
                <br /> Eğitimde fırsat eşitliğini sağlamak için koşuyoruz. Senin
                de desteginle bir adim daha ileriye.
              </p>
            </Col>
          </Row>
          <img
            style={{ width: '100%', borderRadius: '16px' }}
            src={banner}
            alt="Kosuyoruz"
          />
          <hr />
          <h2>Kosucularimiz</h2>
          <Row>
            {runners.map(({ node: runner }) => {
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
          <Row center="xs">
            <Col sm={4}>
              <Link className="sk-button" to="/kosucular">
                Tümünü Gör
              </Link>
            </Col>
          </Row>
          <hr />
          <h2>Parkurlar</h2>
          <Row>
            <img src={parkour} style={{ width: '100%' }} alt="" />
          </Row>
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

// export const pageQuery = graphql`
//   query IndexQuery {
//     allMarkdownRemark(
//       sort: { order: DESC, fields: [frontmatter___date] }
//       filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//     ) {
//       edges {
//         node {
//           excerpt(pruneLength: 400)
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             templateKey
//             date(formatString: "MMMM DD, YYYY")
//           }
//         }
//       }
//     }
//   }
// `;
