import { Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";

const ThumbnailCard = ({ image, title, codeSrc, imageSrc }) => {
  return (
    <>
      <div style={cardWrapper}>
        <GatsbyImage
          image={image}
          alt={title}
          lyaout={"constrained"}
          width={440}
          style={imageStyle}
        />
        <p style={fontColor}>
          <Typography variant="h6">{title}</Typography>
        </p>
        <div>
          <a
            href={`https://github.com/HayashiInShiga/generative-art-portfolio/tree/main/post/${codeSrc}`}
            style={fontColor}
          >
            <Typography variant="button">View code</Typography>
          </a>
          <a href={`https://www.instagram.com/p/${imageSrc}`} style={fontColor}>
            <Typography variant="button">More images</Typography>
          </a>
        </div>
      </div>
    </>
  );
};

export default ThumbnailCard;

const cardWrapper = {
  position: "relative",
  width: "440px",
  height: "auto",
  background: "#333333",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  margin: "20px",
  paddingBottom: "20px",
  borderRadius: "8px",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, .5)",
};

const imageStyle = { zIndex: "0", borderRadius: "8px 8px 0 0" };

const fontColor = { color: "#CDCDCD", margin: "10px" };
