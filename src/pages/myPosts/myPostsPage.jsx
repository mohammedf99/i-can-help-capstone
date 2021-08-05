import React from "react";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./myPostsPage.styled";
import Layout from "../../components/Layout/Layout";

function MyPostsPage() {
  return (
    <Layout>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">My posts</h3>
        <div className="posts">
          <ProfilePost />
          <ProfilePost />
        </div>
      </PostsContainer>
    </Layout>
  );
}

export default MyPostsPage;
