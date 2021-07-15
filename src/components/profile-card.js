import { Typography } from "@material-ui/core";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const ProfileCard = () => {
  return (
    <>
      <div
        style={{
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
        }}
      >
        <StaticImage
          src="../images/profile-image.png"
          alt="Profile Image"
          // width={300}
          style={{
            marginTop: "20px",
            borderRadius: "8px",
            width: "80%",
            zIndex: "0",
          }}
        />
        <p style={{ color: "#CDCDCD", textAlign: "center" }}>
          <Typography variant="h5">Hayashizaki</Typography>
          <Typography variant="body2">first year graduate student</Typography>
          <Typography variant="body2">
            at Kyoto Institue of Technology
          </Typography>
        </p>
        <a
          href="https://github.com/HayashiInShiga/generative-art-portfolio"
          style={{
            color: "#CDCDCD",
            marginRight: "20px",
            marginLeft: "auto",
            marginBottom: "15px",
          }}
        >
          <Typography variant="button">View code on GitHub</Typography>
        </a>
      </div>
    </>
  );
};

export default ProfileCard;
