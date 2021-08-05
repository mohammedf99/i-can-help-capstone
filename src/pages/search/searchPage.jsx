import React from "react";
import Post from "../../components/Post/Post";
import PostFiltering from "../../components/PostFiltering/PostFiltering";
import { SearchContainer } from "./searchPage.styled";
import Layout from "../../components/Layout/Layout";

function SearchPage() {
  return (
    <Layout>
      <SearchContainer>
        <div className="filter-section">
          <h2 className="title">Filter by...</h2>
          <PostFiltering />
        </div>
        <div className="post-section">
          <h2 className="title">Search result...</h2>
          <Post />
          <Post />
        </div>
      </SearchContainer>
    </Layout>
  );
}

export default SearchPage;
