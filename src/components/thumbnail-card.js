import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const ThumbnailCard = ({ image, title, codeSrc, imageSrc }) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "440px",
          height: "520px",
          background: "#333333",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          margin: "20px",
          borderRadius: "8px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, .5)",
        }}
      >
        <GatsbyImage
          image={image}
          alt={title}
          style={{ marginTop: "20px", borderRadius: "8px" }}
        />
        <p style={{ color: "#CDCDCD" }}>{title}</p>
        <div>
          <a
            href={`https://github.com/HayashiInShiga/generative-art-portfolio/tree/main/post/${codeSrc}`}
            style={{
              color: "#CDCDCD",
            }}
          >
            View code
          </a>
          <a
            href={`https://www.instagram.com/p/${imageSrc}`}
            style={{
              color: "#CDCDCD",
              marginLeft: "20px",
            }}
          >
            More images
          </a>
        </div>
      </div>
    </>
  );
};

export default ThumbnailCard;
