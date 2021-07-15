import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Header = ({ currentPage }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "80px",
          left: "0",
          top: "0",
          background: "#000000",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: "1",
        }}
      >
        <StaticImage
          src="../images/Title-Text.png"
          alt="Title Image"
          height={32}
          style={{ marginLeft: "32px" }}
        />
        <Link
          to="/"
          style={{ color: "#ffffff", marginRight: "48px", marginLeft: "auto" }}
        >
          Home
        </Link>
        <Link to="/profile" style={{ color: "#ffffff", marginRight: "48px" }}>
          Profile
        </Link>
      </div>
      {/* <div style={{ width: "100%", height: "10%", left: "0", top: "0" }}></div> */}
    </>
  );
};

export default Header;
