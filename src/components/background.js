import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const BackgroundImage = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        left: "0",
        top: "0",
        background: "#000000",
        zIndex: "-2",
      }}
    ></div>
  );
};

export default BackgroundImage;
