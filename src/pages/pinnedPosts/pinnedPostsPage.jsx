import React from "react";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./pinnedPostsPage.styled";

function PinnedPostsPage() {
  return (
    <>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">Pinned posts</h3>
        <div className="posts">
          <ProfilePost />
          <ProfilePost />
        </div>
      </PostsContainer>
    </>
  );
}

export default PinnedPostsPage;
