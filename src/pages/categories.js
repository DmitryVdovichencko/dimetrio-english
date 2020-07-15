import React from 'react';
import { graphql,Link } from 'gatsby';
import Layout from '../components/Layout';
import PostPerview from '../components/PostPerview';
const getCategoriesList = ({allMdx}) => {
    const result = allMdx.edges.reduce((res,post)=>{
        res.push(...post.node.fields.categories);
        return res;
    },[]);
    return [...new Set(result)];
}
const Categories = ({ location, data: { site,allMdx } }) => {
    const CategoriesList = getCategoriesList({allMdx});
  return (
    <Layout location={location} site={site}>
   {CategoriesList.map((category,index)=>(
       <li key={category}>
            <Link to={category}>{category}</Link>
       </li>
   ))
   }
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

export default Categories;