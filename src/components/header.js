import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/roboto";
import { Hidden, Typography } from "@material-ui/core";
import HamburgerMenu from "./hamburgermenu";

const Header = () => {
  return (
    <>
      <div style={headerWrapper}>
        <StaticImage
          src="../images/Title-Text.png"
          alt="Title Image"
          height={24}
          style={{ marginLeft: "32px" }}
        />
        <Hidden smUp>
          <HamburgerMenu />
        </Hidden>
        <Hidden xsDown>
          <Link to="/" style={homeButtonStyle}>
            <Typography variant="button">Home</Typography>
          </Link>
          <Link to="/profile" style={profileButtonStyle}>
            <Typography variant="button">Profile</Typography>
          </Link>
        </Hidden>
      </div>
    </>
  );
};

export default Header;

const headerWrapper = {
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
};

const homeButtonStyle = {
  color: "#ffffff",
  marginRight: "48px",
  marginLeft: "auto",
  textDecoration: "none",
};

const profileButtonStyle = {
  color: "#ffffff",
  marginRight: "48px",
  textDecoration: "none",
};
