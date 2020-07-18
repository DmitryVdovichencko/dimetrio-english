import React from 'react';
import { graphql,Link } from 'gatsby';
import Layout from '../components/Layout';
import PostPerview from '../components/PostPerview';

const Articles = ({ location, data: { site,allMdx } }) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  };
  return (
    <Layout location={location} site={site}>
    {allMdx.edges.map((post)=>(
      
    <PostPerview categories={post.node.fields.categories} date={(new Date(Date.parse(post.node.fields.date))).toLocaleString("en-US", options)} slug={post.node.fields.slug} title={post.node.fields.title} excerpt={post.node.excerpt} >
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
            date
            categories
          }
          excerpt
        }
      }
    }
  }
`;

export default Articles;