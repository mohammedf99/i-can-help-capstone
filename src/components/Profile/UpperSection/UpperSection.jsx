import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  UpperSectionCont,
  MyPostsCard,
  PinnedPostCard,
} from "./UpperSection.styled";
import DataContext from "../../../Utilities/Contexts/DataContext";
import AuthContext from "../../../Utilities/Contexts/AuthContext";
import { getUser } from "../../../Utilities/FirebaseUtilities";

const UpperSection = () => {
  const [userPosts, setUserPosts] = useState({});
  const data = useContext(DataContext).userData;
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    getUser(currentUser?.uid).then((user) => {
      user?.ref
        .collection("posts")
        .onSnapshot((snapshot) =>
          setUserPosts((prev) => ({ ...prev, myPosts: snapshot.docs.length }))
        );
    });
  }, [currentUser]);

  return (
    <UpperSectionCont>
      <div className="left-section">
        <div className="img-div">
          <img src={data?.picture} alt="user" />
        </div>
        <div className="user-info-div">
          <h1 className="name">{data?.name}</h1>
          <h2 className="job">{data?.job}</h2>
          <h3 className="location">
            <span className="location-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            {data?.location}
          </h3>
        </div>
      </div>

      <div className="right-section">
        <MyPostsCard>
          <div className="card-upper">
            <h3 className="post-number">{userPosts.myPosts}</h3>
          </div>
          <div className="card-lower">
            <h3 className="post-title">
              <Link href="/myPosts">My posts</Link>
            </h3>
          </div>
        </MyPostsCard>
        <PinnedPostCard>
          <div className="card-upper">
            <h3 className="post-number">{data?.pinnedPosts?.length || 0}</h3>
          </div>
          <div className="card-lower">
            <h3 className="post-title">
              <Link href="/pinnedPosts">Pinned posts</Link>
            </h3>
          </div>
        </PinnedPostCard>
      </div>
    </UpperSectionCont>
  );
};

export default UpperSection;
