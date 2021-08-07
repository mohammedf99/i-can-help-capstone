import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { PostCardCont, PostCardBody } from "./ProfilePost.styled";
import { deletePost } from "../../Utilities/FirebaseUtilities";

const ProfilePost = ({ data }) => {
  const postData = data?.post?.data();
  const user = data?.userData;

  const deleteHandler = (e) => {
    e.stopPropagation();
    deletePost(data?.post?.id, data?.post?.data()?.userId);
  };

  return (
    <Link href={`/postDetails/${data?.post?.id}`}>
      <PostCardCont
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={postData?.picture} width="240" />}
      >
        <PostCardBody>
          <div className="upper-body">
            <h4 className="name">{user?.name}</h4>
            <h4 className="salary">{postData?.price}</h4>
          </div>
          <div className="middle-body">
            <p>{postData?.jobDescription}</p>
          </div>
          <div className="lower-body">
            <button onClick={deleteHandler} type="button">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        </PostCardBody>
      </PostCardCont>
    </Link>
  );
};

export default ProfilePost;
