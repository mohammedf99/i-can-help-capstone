import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../components/Layout/Layout";
import Category from "../../components/Category/Category";
import HomeHero from "../../components/HomeHero/HomeHero";
import StatsCounter from "../../components/StatsCounter/StatsCounter";
import Testimonials from "../../components/Testimonials/Testimonials";

function WelcomePage() {
  return (
    <Layout>
      <HomeHero />
      <StatsCounter />
      <Category />
      <Testimonials />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer", "navbar", "welcome"])),
  },
});

export default WelcomePage;
