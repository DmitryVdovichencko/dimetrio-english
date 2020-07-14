import React from 'react';
import { graphql,Link } from 'gatsby';
import Layout from '../components/Layout';

const Articles = ({ location, data: { site,allMdx } }) => {
  return (
    <Layout location={location} site={site}>
    {allMdx.edges.map((post)=>(
      <a href={post.node.fields.slug}>
    <div>
      <h5>{post.node.fields.title}</h5>
      <p>{post.node.excerpt}</p>
    </div>
    </a>))}
  </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx {
      edges {
        node {
          fields {
            title
            slug
            keywords
            id
            description
            date(locale: "")
            categories
          }
          excerpt
        }
      }
    }
  }
`;

export default Articles;