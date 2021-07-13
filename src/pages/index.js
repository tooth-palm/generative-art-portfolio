import * as React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const image = getImage(
    data.allMarkdownRemark.edges[0].node.frontmatter.thumbnail
  );
  return (
    <>
      <Header />
      <GatsbyImage image={image} alt="aaa" />
    </>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  width: 400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
