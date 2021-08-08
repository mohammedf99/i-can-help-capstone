import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Utilities/Contexts/AuthContext";
import Layout from "../../components/Layout/Layout";
import LoggedIn from "../../Utilities/auth/Auth";
import MyPostsPage from "./myPostsPage";
import { usersRef } from "../../Utilities/FirebaseUtilities";

export default function MyPosts() {
  const { currentUser } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (currentUser)
      usersRef
        .doc(currentUser?.uid)
        .collection("posts")
        .onSnapshot((snapshot) => setMyPosts(snapshot.docs));
  }, [currentUser]);

  return (
    <LoggedIn>
      <Layout>
        <MyPostsPage myPosts={myPosts} />
      </Layout>
    </LoggedIn>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
