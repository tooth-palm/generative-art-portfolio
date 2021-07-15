import { Link } from "gatsby";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";

const Header = () => {
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
          style={{
            color: "#ffffff",
            marginRight: "48px",
            marginLeft: "auto",
            textDecoration: "none",
          }}
        >
          <Typography variant="button">Home</Typography>
        </Link>
        <Link
          to="/profile"
          style={{
            color: "#ffffff",
            marginRight: "48px",
            textDecoration: "none",
          }}
        >
          <Typography variant="button">Profile</Typography>
        </Link>
      </div>
    </>
  );
};

export default Header;
