import * as React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import { graphql } from "gatsby";
import ThumbnailCard from "../components/thumbnail-card";

const IndexPage = ({ data }) => {
  const image = getImage(
    data.allMarkdownRemark.edges[0].node.frontmatter.thumbnail
  );
  return (
    <>
      <Header />
      {/* <GatsbyImage image={image} alt="aaa" /> */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          left: "0",
          top: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          zIndex: "-1",
        }}
      >
        <ThumbnailCard image={image} title={"aaa"} />
        <ThumbnailCard image={image} title={"bbb"} />
      </div>
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
                  placeholder: DOMINANT_COLOR
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
