import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoggedIn from "../../Utilities/auth/Auth";
import ProfilePage from "../../components/ProfilePage/profilePage";

export default function Profile() {
  return (
    <LoggedIn>
      <ProfilePage />
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
