import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Avatar from "antd/lib/avatar/avatar";
import LoggedIn from "../../Utilities/auth/Auth";
import Layout from "../../components/Layout/Layout";

function AboutPage() {
  // This controls the direction of the page for RTL languages

  return (
    <LoggedIn>
      <Layout>
        <div style={{ margin: "40px", textAlign: "center" }}>
          <h1>About US</h1>
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Avatar
                src="https://ca.slack-edge.com/T01Q1SSP35X-U01QD3N1NP2-65c9fe6b02f5-512"
                size={300}
                style={{ marginBottom: "10px" }}
              />
              <h2>Salah</h2>
              <h3>Lead Engineer</h3>
            </div>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Avatar
                src="https://ca.slack-edge.com/T01Q1SSP35X-U01R826F98Q-3a462a16d0c4-512"
                size={300}
                style={{ marginBottom: "10px" }}
              />
              <h2>Omer</h2>
              <h3>Junior Developer</h3>
            </div>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Avatar
                src="https://ca.slack-edge.com/T01Q1SSP35X-U01R826A7BJ-e284b603068a-512"
                size={300}
                style={{ marginBottom: "10px" }}
              />
              <h2>Mohammed</h2>
              <h3>Junior Developer</h3>
            </div>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <Avatar
                src="https://ca.slack-edge.com/T01Q1SSP35X-U01QQC7P80L-0bb8bc9ef61e-512"
                size={300}
                style={{ marginBottom: "10px" }}
              />
              <h2>Eman</h2>
              <h3>Junior Developer</h3>
            </div>
          </div>
        </div>
      </Layout>
    </LoggedIn>
  );
}

// This function below should exist in everypage
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default AboutPage;
