import React, { useContext, useEffect, useState } from "react";
import { useTranslation, appWithTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import Post from "../Post/Post";
import PostFiltering from "../PostFiltering/PostFiltering";
import { SearchContainer } from "./searchPage.styled";
import Layout from "../Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";

function SearchPage() {
  const { t } = useTranslation("search");

  alert(t);

  console.log(t);

  const { query } = useRouter();
  const { posts } = useContext(DataContext);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  useEffect(() => setFilteredPosts(posts), [posts]);

  useEffect(() => {
    if (query.q && posts.length > 0 && query.q !== "") {
      // eslint-disable-next-line array-callback-return
      let queryPosts = posts.map((post) => {
        const foundPost = Object.values(post.data()).find((value) =>
          value?.toString().toLowerCase().includes(query.q.toLowerCase()),
        );

        if (foundPost !== undefined) return post;
      });

      // remove all undefined from array
      queryPosts = queryPosts.filter((post) => post !== undefined);

      setFilteredPosts(queryPosts);
    }
  }, [query, posts]);

  return (
    <Layout>
      <SearchContainer>
        <div className="filter-section">
          <h2 className="title">{t("filterBy")}...</h2>
          <PostFiltering setFilteredPosts={setFilteredPosts} posts={posts} type={query?.type} />
        </div>
        <div className="post-section">
          <h2 className="title">
            {t("searchRes")} {query.q} ...
          </h2>
          {filteredPosts.map((post) => (
            <Post data={{ ...post?.data(), id: post.id }} />
          ))}
        </div>
      </SearchContainer>
    </Layout>
  );
}

export default SearchPage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["search", "home", "footer", "navbar"])),
  },
});
