import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import NavbarSection from "../components/Navbar/NavbarSection";
import ProfilePost from "../components/ProfilePost/ProfilePost";
import UpperSection from "../components/Profile/UpperSection/UpperSection";
import Category from '../components/Category/Category';

function Homepage() {
  // This controls the direction of the page for RTL languages
  const { t } = useTranslation("common");

  return (
    <div>
      <NavbarSection />
      <Testimonials />
      <UpperSection />
      <Footer />
      <Category />
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
