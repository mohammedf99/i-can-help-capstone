import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import UpperSection from "../components/Profile/UpperSection/UpperSection";
import LowerSection from "../components/Profile/LowerSection/LowerSection";
// import { Navbar } from "@components/Navbar/Navbar";

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  return (
    <div>
      {t("title")}
      <Navbar />
      {/* <UpperSection /> */}
      <LowerSection />
      <Footer />
    </div>
  );
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
