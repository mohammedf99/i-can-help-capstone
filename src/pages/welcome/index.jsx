import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export { default } from "./welcomePage";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
