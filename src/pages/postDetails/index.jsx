import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LoggedIn from "../../Utilities/auth/Auth";
import PostDetailsPage from "./[id]";

export default function PostDetail() {
  return (
    <LoggedIn>
      <PostDetailsPage />
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "postDetails", "footer", "navbar"])),
  },
});
