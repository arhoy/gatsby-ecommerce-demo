import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from '../components/layout';

export const query = graphql`
  {
    allItems: allContentfulFashionTwoBags {
      nodes {
        id
        productName
        productSlug
        shortDescription
        price
        discountPrice
        tags
        rating
        displayBadge
        mainImage {
          fluid(quality: 90, maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;

const StyledImage = styled(Image)`
  width: 20rem;
  height: 20rem;
`;

const index = ({ data }) => {
  const products = data.allItems.nodes;
  return (
    <Layout>
      {products.map(product => (
        <Link key={product.productSlug} to={`/products/${product.productSlug}`}>
          <h4>{product.productName}</h4>
          <div> $ {product.price} USD</div>
          <div>
            <StyledImage fluid={product.mainImage.fluid} />
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export default index;
