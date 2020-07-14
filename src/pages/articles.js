import React from 'react';
import { graphql,Link } from 'gatsby';
import Layout from '../components/Layout';
import PostPerview from '../components/PostPerview';

const Articles = ({ location, data: { site,allMdx } }) => {
  return (
    <Layout location={location} site={site}>
    {allMdx.edges.map((post)=>(
      
    <PostPerview slug={post.node.fields.slug} title={post.node.fields.title} excerpt={post.node.excerpt} >
    </PostPerview>
 ))}
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