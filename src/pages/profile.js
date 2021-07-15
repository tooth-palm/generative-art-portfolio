import * as React from "react";
import BackgroundImage from "../components/background";
import Header from "../components/header";
import ProfileCard from "../components/profile-card";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <div style={bodyWrapper}>
        <ProfileCard />
      </div>
    </>
  );
};

export default ProfilePage;

const bodyWrapper = {
  position: "absolute",
  width: "100%",
  left: "0",
  top: "12vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  zIndex: "-1",
};
