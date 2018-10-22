import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Grid, Row, Col } from 'react-flexbox-grid';
import banner from '../img/banner.png';
import map from '../img/map.png';
import Runner from '../components/Runner';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <Grid>
          <Row center="xs" className="sk-jumbotron">
            <Col xs={5}>
              <span className="sk-jumbotron-caption">KOŞUYORUZ</span>
              <h3>Biz 2018 Yilinda da Kosuyoruz, Peki Ya Sen?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse non massa tincidunt, imperdiet sem nec, volutpat
                lacus. Vivamus et lectus eu urna vehicula vehicula eu et augue.
              </p>
            </Col>
          </Row>
          <img
            style={{ width: '100%', borderRadius: '16px' }}
            src={banner}
            alt="Kosuyoruz"
          />
          <hr />
          <h3>Kosucularimiz</h3>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Jimi Hendrix"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://www.rollingstone.com/wp-content/uploads/2018/06/jimi-hendrix-3fcfe67d-3e3b-478d-96b2-217e30de0937.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Mona Lisa"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg!Large.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="John Mayer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://images-na.ssl-images-amazon.com/images/I/C1AbK+ZQO9S._CR0,0,3840,2880_._SL1000_.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Orianthi Panagaris"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="http://images2.fanpop.com/image/photos/12400000/orianthi-panagaris-orianthi-12415454-466-579.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Mona Lisa"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://uploads7.wikiart.org/images/leonardo-da-vinci/mona-lisa.jpg!Large.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="John Mayer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://images-na.ssl-images-amazon.com/images/I/C1AbK+ZQO9S._CR0,0,3840,2880_._SL1000_.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Orianthi Panagaris"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="http://images2.fanpop.com/image/photos/12400000/orianthi-panagaris-orianthi-12415454-466-579.jpg"
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <Runner
                name="Jimi Hendrix"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="https://www.rollingstone.com/wp-content/uploads/2018/06/jimi-hendrix-3fcfe67d-3e3b-478d-96b2-217e30de0937.jpg"
              />
            </Col>
          </Row>
          <Row center="xs">
            <Col sm={4}>
              <button className="sk-button">Tumunu Gor</button>
            </Col>
          </Row>
          <hr />
          <h3>Rota</h3>
          <Row>
            <img src={map} alt="" />
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
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
