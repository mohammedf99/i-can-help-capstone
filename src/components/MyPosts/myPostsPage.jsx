import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import UpperSection from "../Profile/UpperSection/UpperSection";
import ProfilePost from "../ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./myPostsPage.styled";
import Layout from "../Layout/Layout";

import DataContext from "../../Utilities/Contexts/DataContext";

function MyPostsPage({ myPosts }) {
  const { userData } = useContext(DataContext);
  const { t } = useTranslation("common");
  return (
<<<<<<< HEAD
    <div style={{ paddingBlock: "50px" }}>
=======
    <Layout>
>>>>>>> add layout to the page
      <ProfileSection>
        <UpperSection />
      </ProfileSection>

      <PostsContainer>
        <h3 className="my-post-title">{t("myPosts")}</h3>
        <div className="posts">
          {myPosts && myPosts?.map((post) => <ProfilePost data={{ userData, post }} />)}
        </div>
      </PostsContainer>
<<<<<<< HEAD
    </div>
=======
    </Layout>
>>>>>>> add layout to the page
  );
}

export default MyPostsPage;
