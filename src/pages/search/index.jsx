import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export { default } from "./searchPage";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["search", "home", "footer", "navbar"])),
  },
});
