import React, { useContext } from "react";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./myPostsPage.styled";
import Layout from "../../components/Layout/Layout";

import DataContext from "../../Utilities/Contexts/DataContext";


function MyPostsPage({ myPosts }) {
  const { userData } = useContext(DataContext);
  return (
    <div style={{ paddingBlock: "50px" }}>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">My posts</h3>
        <div className="posts">
          {myPosts &&
            myPosts?.map((post) => <ProfilePost data={{ userData, post }} />)}
        </div>
      </PostsContainer>
    </div>
  );
}

export default MyPostsPage;
