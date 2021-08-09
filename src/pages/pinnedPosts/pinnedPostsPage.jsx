import React, { useEffect, useContext, useState } from "react";
import { useTranslation, appWithTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import UpperSection from "../../components/Profile/UpperSection/UpperSection";
import ProfilePost from "../../components/ProfilePost/ProfilePost";
import { ProfileSection, PostsContainer } from "./pinnedPostsPage.styled";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";

function PinnedPostsPage() {
  const { posts, userData } = useContext(DataContext);
  const { t } = useTranslation();
  return (
    <Layout>
      <ProfileSection>
        <UpperSection />
      </ProfileSection>
      <PostsContainer>
        <h3 className="my-post-title">{t("pinnedPosts")}</h3>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "pinnedPosts", "footer", "navbar"])),
  },
});
