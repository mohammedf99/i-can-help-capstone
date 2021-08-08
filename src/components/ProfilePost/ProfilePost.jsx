import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { PostCardCont, PostCardBody } from "./ProfilePost.styled";
import {
  deletePost,
  unPinPost,
  usersRef,
} from "../../Utilities/FirebaseUtilities";
import AuthContext from "../../Utilities/Contexts/AuthContext";

const ProfilePost = ({ data, isPin }) => {
  const [user, setUser] = useState(null);
  const postData = data?.post?.data();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (postData && postData.userId)
      usersRef
        .doc(postData?.userId)
        .onSnapshot((snapshot) => setUser(snapshot.data()));
  }, [postData]);

  const deleteHandler = (e) => {
    e.stopPropagation();
    if (!isPin) {
      deletePost(data?.post?.id, data?.post?.data()?.userId);
    } else {
      unPinPost(currentUser?.uid, data?.post?.id);
    }
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
