import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  PostDiv,
  LocationTag,
  Tags,
  PinButton,
  PinnedButton,
} from "./Post.styled";
import ContactModal from "./ContactModal";
import {
  pinPost,
  unPinPost,
  usersRef,
} from "../../Utilities/FirebaseUtilities";
import AuthContext from "../../Utilities/Contexts/AuthContext";
import DataContext from "../../Utilities/Contexts/DataContext";

const Post = ({ data }) => {
  const { currentUser } = useContext(AuthContext);
  const { userData } = useContext(DataContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (data && data.userId) {
      usersRef
        .doc(data?.userId)
        .onSnapshot((snapshot) => setUser(snapshot.data()));
    }
  }, [data]);

  const router = useRouter();
  return (
    <PostDiv onClick={() => router.push(`/postDetails/${data?.id}`)}>
      <div className="post-upper-section">
        <div className="upper-left">
          <span className="user-type">
            {data?.type === 1 ? "Employeer" : "Jobseeker"}
          </span>
          <span className="user-full-name">{user?.name}</span>
          <p className="post-desc">{data?.title}</p>
        </div>
        <div className="upper-right">
          <LocationTag className="post-location-tag">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="pink-icon-color"
            />
            <p className="address">{data?.location}</p>
          </LocationTag>
        </div>
      </div>
      <div className="post-lower-section">
        <div className="lower-left">
          <Tags>{data?.employment}</Tags>
          <Tags>{data?.jobType}</Tags>
        </div>
        <div className="lower-right">
          {userData?.pinnedPosts?.includes(data?.id) ? (
            <PinnedButton
              onClick={(e) => {
                e.stopPropagation();
                unPinPost(currentUser?.uid, data?.id);
              }}
            >
              <FontAwesomeIcon icon={faCheck} className="pin-icon" />
              Pinned
            </PinnedButton>
          ) : (
            <PinButton
              onClick={(e) => {
                e.stopPropagation();
                pinPost(currentUser?.uid, data?.id);
              }}
            >
              <FontAwesomeIcon icon={faCheck} className="pin-icon" />
              Pin
            </PinButton>
          )}

          <div onClick={(e) => e.stopPropagation()}>
            <ContactModal user={user} />
          </div>
        </div>
      </div>
    </PostDiv>
  );
};

export default Post;
