import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const ProfileCard = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "440px",
          height: "480px",
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
          style={{ marginTop: "20px", borderRadius: "8px", width: "80%" }}
        />
        <p style={{ color: "#CDCDCD", textAlign: "center" }}>
          <b>Hayashizaki</b>
          <br />
          first year graduate student
          <br />
          at Kyoto Institue of Technology
        </p>
        <a
          href="https://github.com/HayashiInShiga/generative-art-portfolio"
          style={{
            color: "#CDCDCD",
            marginRight: "20px",
            marginLeft: "auto",
            marginBottom: "10px",
          }}
        >
          View code on GitHub
        </a>
      </div>
    </>
  );
};

export default ProfileCard;
