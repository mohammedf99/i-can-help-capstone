import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { PostDiv, LocationTag, Tags, PinButton } from "./Post.styled";
import ContactModal from "./ContactModal";

const Post = () => (
  <PostDiv>
    <div className="post-upper-section">
      <div className="upper-left">
        <span className="user-type">Jobseeker</span>
        <span className="user-full-name">Mohammmed Hamid Mahmood</span>
        <p className="post-desc">I am a gardner looking for a part-time job.</p>
      </div>
      <div className="upper-right">
        <LocationTag className="post-location-tag">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="pink-icon-color" />
          <p className="address">Sulaymaniyah, Iraq</p>
        </LocationTag>
      </div>
    </div>
    <div className="post-lower-section">
      <div className="lower-left">
        <Tags>Part-time</Tags>
        <Tags>Gardner</Tags>
      </div>
      <div className="lower-right">
        <PinButton>
          <FontAwesomeIcon icon={faCheck} className="pin-icon" />
          Pin
        </PinButton>
        <ContactModal />
      </div>
    </div>
  </PostDiv>
);

export default Post;
