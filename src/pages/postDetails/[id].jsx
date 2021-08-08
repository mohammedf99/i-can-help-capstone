import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Space, Spin } from "antd";
import PostDetail from "../../components/PostDetail/PostDetail";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";
import { getUser } from "../../Utilities/FirebaseUtilities";

function PostDetailsPage() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { query } = router;
  const { posts } = useContext(DataContext);

  useEffect(() => {
    if (post && post.data() && post.data().userId) {
      getUser(post.data().userId).then((user) => setUser(user.data()));
    }
  }, [post]);

  useEffect(() => {
    posts.forEach((post) => {
      if (post.id === query.id) setPost(post);
    });
  }, [posts]);

  if (!post)
    return (
      <Space size="middle">
        <Spin size="large" />
      </Space>
    );

  return (
    <Layout>
      <PostDetail data={{ ...post?.data(), user, id: post?.id }} />
    </Layout>
  );
}

export default PostDetailsPage;

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
