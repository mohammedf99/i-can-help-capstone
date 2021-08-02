import React from "react";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./myPostsPage.styled";

function MyPostsPage() {
  return (
    <>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">My posts</h3>
        <div className="posts">
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </div>
      </PostsContainer>
    </>
  );
}

export default MyPostsPage;
