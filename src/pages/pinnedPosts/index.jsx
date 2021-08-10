import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoggedIn from "../../Utilities/auth/Auth";
import PinnedPostsPage from "../../components/PinnedPosts/pinnedPostsPage";

export default function PinnedPosts() {
  return (
    <LoggedIn>
      <PinnedPostsPage />
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "pinnedPosts", "footer", "navbar"])),
  },
});
