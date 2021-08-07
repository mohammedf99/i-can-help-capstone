import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import JobPostingForm from "../../components/JobPostingForm/JobPostingForm";
import Post from "../../components/Post/Post";
import { HomePageCont } from "./homePage.styled";
import Layout from "../../components/Layout/Layout";

function HomePage() {
  return (
    <Layout>
      <HomePageCont>
        <div className="left-section">
          <div className="profile-div">
            <a href="#">
              <span className="profile-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="profile-title">Profile</span>
            </a>
          </div>
        </div>
        <div className="right-section">
          <h2 className="title">Home</h2>
          <JobPostingForm />
          <h2 className="title" id="latest-title">
            Latest job opportunities
          </h2>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </HomePageCont>
    </Layout>
  );
}

export default HomePage;
