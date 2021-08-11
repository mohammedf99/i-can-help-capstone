import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Space, Spin } from "antd";
import PostDetail from "../../components/PostDetail/PostDetail";
import Layout from "../../components/Layout/Layout";
import DataContext from "../../Utilities/Contexts/DataContext";
import { getAllPosts, getUser, usersRef } from "../../Utilities/FirebaseUtilities";

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

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: "IrKz60opk8jVAmTPAmrX" } },
    { params: { id: "mWC2nTQ4LNDTAdFIndU9" } },
    { params: { id: "WhqDuhEzOaOjr27Pl37A" } },
    { params: { id: "WxXV7f9vljChtBwuYdsO" } },
    { params: { id: "X5vR6ql4Ha83OA3pX3ZS" } },
    { params: { id: "xXt47jaz0tk1NLoAvtpR" } },
    { params: { id: "6Fa2rqAdNholoZO2J7dU" } },
    { params: { id: "FYCFZxMQJFCGszaCGLiz" } },
    { params: { id: "dc3Meq9l5Ciqath7MMFu" } },
  ];

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "postDetails",
      "footer",
      "navbar",
      "home",
    ])),
  },
});
