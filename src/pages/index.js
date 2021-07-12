import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/header";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  // const posts = query.allMarkdownRemark.edges.node;
  // const thumbnail_image = posts[0].frontmatter.thumbnail.childImageSharp.fluid;
  // return (
    <>
      <Header />
      {/* <StaticImage fluid={thumbnail_image} /> */}
    </>
  );
};

export default IndexPage;

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//             thumbnail {
//               childImageSharp {
//                 fluid(maxWidth: 1280) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
