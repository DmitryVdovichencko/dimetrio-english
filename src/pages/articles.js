import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Articles = ({ location, data: { site } }) => {
  return <Layout location={location} site={site}></Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;

export default Articles;