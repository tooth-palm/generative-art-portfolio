import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/roboto";
import { Drawer, Hidden, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
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
          <IconButton
            color="inherit"
            onClick={openDrawer}
            style={homeButtonStyle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
            <div style={drawerBackground}>
              <Link to="/" style={drawerButtonStyle}>
                <Typography variant="h5">Home</Typography>
              </Link>
              <Link to="/profile" style={drawerButtonStyle}>
                <Typography variant="h5">Profile</Typography>
              </Link>
            </div>
          </Drawer>
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
  marginRight: "5%",
  marginLeft: "auto",
  textDecoration: "none",
};

const profileButtonStyle = {
  color: "#ffffff",
  marginRight: "5%",
  textDecoration: "none",
};

const drawerBackground = {
  height: "100vh",
  width: "40vw",
  background: "#CDCDCD",
  textAlign: "center",
};

const drawerButtonStyle = {
  margin: "20px",
  textDecoration: "none",
  color: "#272727",
};
