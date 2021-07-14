import * as React from "react";
import BackgroundImage from "../components/background";
import Header from "../components/header";
import ProfileCard from "../components/profile-card";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <BackgroundImage />
      <div
        style={{
          position: "absolute",
          width: "100%",
          left: "0",
          top: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          zIndex: "-1",
        }}
      >
        <ProfileCard />
      </div>
    </>
  );
};

export default ProfilePage;
