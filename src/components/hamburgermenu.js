import { Link } from "gatsby";
import * as React from "react";
import { Drawer, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const HamburgerMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const openDrawer = () => {
    setDrawerOpen(true);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <IconButton color="inherit" onClick={openDrawer} style={menuButtonStyle}>
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
    </>
  );
};

export default HamburgerMenu;

const menuButtonStyle = {
  color: "#ffffff",
  marginRight: "5%",
  marginLeft: "auto",
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
