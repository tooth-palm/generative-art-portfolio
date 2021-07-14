import * as React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import { graphql } from "gatsby";
import ThumbnailCard from "../components/thumbnail-card";
import BackgroundImage from "../components/background";

const IndexPage = ({ data }) => {
  const thumbnailImages = data.allMarkdownRemark.edges.map((post) =>
    getImage(post.node.frontmatter.thumbnail)
  );
  const postText = data.allMarkdownRemark.edges.map(
    (post) => post.node.frontmatter.title
  );
  const githubSource = data.allMarkdownRemark.edges.map(
    (post) => post.node.frontmatter.github
  );
  console.log(githubSource);
  const instagramSource = data.allMarkdownRemark.edges.map(
    (post) => post.node.frontmatter.instagram
  );
  return (
    <>
      <Header />
      <BackgroundImage />
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
        {thumbnailImages.map((image, index) => (
          <ThumbnailCard
            image={image}
            title={postText[index]}
            codeSrc={githubSource[index]}
            imageSrc={instagramSource[index]}
            key={postText[index]}
          />
        ))}
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
            github
            instagram
          }
        }
      }
    }
  }
`;
