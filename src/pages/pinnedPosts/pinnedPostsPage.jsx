import React, { useEffect, useContext, useState } from "react";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./pinnedPostsPage.styled";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";

function PinnedPostsPage() {
  const { posts, userData } = useContext(DataContext);

  return (
    <Layout>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>
      <PostsContainer>
        <h3 className="my-post-title">Pinned posts</h3>
        <div className="posts">
          {userData &&
            userData.pinnedPosts &&
            userData.pinnedPosts.map((pinned) => {
              const post = posts?.filter((post) => post.id === pinned)[0];
              return <ProfilePost data={{ post }} isPin />;
            })}
        </div>
      </PostsContainer>
    </Layout>
  );
}

export default PinnedPostsPage;
