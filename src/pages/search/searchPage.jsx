import React from "react";
import { useTranslation, appWithTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Post from "../../components/Post/Post";
import PostFiltering from "../../components/PostFiltering/PostFiltering";
import { SearchContainer } from "./searchPage.styled";
import Layout from "../../components/Layout/Layout";

function SearchPage() {
  const { t } = useTranslation("search");
  return (
    <Layout>
      <SearchContainer>
        <div className="filter-section">
          <h2 className="title">{t("filterBy")}...</h2>
          <PostFiltering />
        </div>
        <div className="post-section">
          <h2 className="title">{t("searchRes")}...</h2>
          <Post />
          <Post />
        </div>
      </SearchContainer>
    </Layout>
  );
}

export default SearchPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["search", "common"])),
  },
});
