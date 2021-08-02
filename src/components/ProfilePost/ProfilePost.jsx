import React from "react";
import { PostCardCont } from "./ProfilePost.styled";

const ProfilePost = () => {
  const { Meta } = PostCardCont;

  return (
    <PostCardCont
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta description="12 hours ago" />
      <a href="#">
        <p>Hidden universe revealed in stunning first images from German telescope</p>
      </a>
    </PostCardCont>
  );
};

export default ProfilePost;
