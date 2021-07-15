import { Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const ProfileCard = () => {
  return (
    <>
      <div style={cardWrapper}>
        <StaticImage
          src="../images/profile-image.png"
          alt="Profile Image"
          style={imageStyle}
        />
        <p style={textStyle}>
          <Typography variant="h5">Hayashizaki</Typography>
          <Typography variant="body2">first year graduate student</Typography>
          <Typography variant="body2">
            at Kyoto Institue of Technology
          </Typography>
        </p>
        <a
          href="https://github.com/HayashiInShiga/generative-art-portfolio"
          style={linkStyle}
        >
          <Typography variant="button">View code on GitHub</Typography>
        </a>
      </div>
    </>
  );
};

export default ProfileCard;

const cardWrapper = {
  position: "relative",
  width: "400px",
  height: "auto",
  background: "#333333",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "column",
  margin: "20px",
  borderRadius: "8px",
  boxShadow: "0px 0px 4px rgba(0, 0, 0, .5)",
};

const imageStyle = {
  marginTop: "20px",
  borderRadius: "8px",
  width: "80%",
  zIndex: "0",
};

const linkStyle = {
  color: "#CDCDCD",
  marginRight: "20px",
  marginLeft: "auto",
  marginBottom: "15px",
};

const textStyle = { color: "#CDCDCD", textAlign: "center" };
