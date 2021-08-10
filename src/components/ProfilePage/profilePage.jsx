import React from "react";
import LowerSection from "../Profile/LowerSection/LowerSection";
import UpperSection from "../Profile/UpperSection/UpperSection";
import { ProfileContainer } from "./profilePage.styled";
import Layout from "../Layout/Layout";

function ProfilePage() {
  return (
    <Layout>
      <ProfileContainer>
        <div className="upper-section">
          <UpperSection />
        </div>
        <div className="lower-section">
          <LowerSection />
        </div>
      </ProfileContainer>
    </Layout>
  );
}

export default ProfilePage;
