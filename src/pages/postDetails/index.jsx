import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoggedIn from "../../Utilities/auth/Auth";
import PostDetailsPage from "./postDetailsPage";

export default function PostDetail() {
  return (
    <LoggedIn>
      <PostDetailsPage />
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
