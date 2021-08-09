import React, { useContext } from "react";
import { useTranslation, appWithTranslation, i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import JobPostingForm from "../../components/JobPostingForm/JobPostingForm";
import Post from "../../components/Post/Post";
import { HomePageCont } from "./homePage.styled";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";

function HomePage() {
  const { posts } = useContext(DataContext);
  const { t } = useTranslation("home");

  return (
    <Layout>
      <HomePageCont>
        <div className="left-section">
          <div className="profile-div">
            <Link href="/profile">
              <div>
                <span className="profile-icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="profile-title">{t("profile")}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="right-section">
          <h2 className="title">{t("home")}</h2>
          <JobPostingForm />
          <h2 className="title" id="latest-title">
            {t("latestJobOpp")}
          </h2>
          {posts.map((post) => (
            <Post data={{ ...post.data(), id: post.id }} />
          ))}
        </div>
      </HomePageCont>
    </Layout>
  );
}

export default HomePage;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["home", "common", "footer", "navbar"])),
  },
});
