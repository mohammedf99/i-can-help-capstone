import React from "react";
import LowerSection from "../../components/Profile/LowerSection/LowerSection";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import { ProfileContainer } from "./profilePage.styled";
import Layout from "../../components/Layout/Layout";

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
