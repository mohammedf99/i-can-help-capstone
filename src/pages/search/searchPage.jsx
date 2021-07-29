import React from "react";
import { Row, Col } from "antd";
import PostFiltering from "../../components/PostFiltering/PostFiltering";
import Post from "../../components/Post/Post";
import { SearchContainer } from "./searchPage.styled";

function SearchPage() {
  return(
    <SearchContainer>
      <div className="filter-section">
        <PostFiltering />
      </div>
      <div className="post-section">
        <Post />
        <Post />
      </div>
    </SearchContainer>
  );
}

export default SearchPage;
