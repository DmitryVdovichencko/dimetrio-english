import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const Training = ({ location, data: { site } }) => {
  return <Layout location={location} site={site}></Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;

export default Training;