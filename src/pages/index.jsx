import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import WelcomePage from "./welcome";
import ProfilePage from "./profile/profilePage";


function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  return <ProfilePage />;
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
