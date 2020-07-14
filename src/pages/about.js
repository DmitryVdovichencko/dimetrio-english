import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const About = ({ location, data: { site } }) => {
  return <Layout location={location} site={site}></Layout>;
}

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`;

export default About;