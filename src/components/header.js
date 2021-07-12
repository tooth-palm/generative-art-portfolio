import { Link } from "gatsby";
import * as React from "react";

const Header = ({ currentPage }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "10%",
        left: "0",
        top: "0",
        background: "#272727",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Link to="/" style={{ color: "#ffffff", marginRight: "50px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ color: "#ffffff", marginRight: "50px" }}>
        Profile
      </Link>
    </div>
  );
};

export default Header;
