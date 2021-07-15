import * as React from "react";

const BackgroundImage = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        left: "0",
        top: "0",
        background: "#CCCCCC",
        zIndex: "-2",
      }}
    ></div>
  );
};

export default BackgroundImage;
