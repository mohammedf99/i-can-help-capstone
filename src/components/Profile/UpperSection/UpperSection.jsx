import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { UpperSectionCont, MyPostsCard, PinnedPostCard } from "./UpperSection.styled";

const UpperSection = () => (
  <UpperSectionCont>
    <div className="left-section">
      <div className="img-div">
        <img
          src="https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4-300x300.png"
          alt="user image"
        />
      </div>
      <div className="user-info-div">
        <h1 className="name">John doe</h1>
        <h2 className="job">Gardner</h2>
        <h3 className="location">
          <span className="location-icon">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </span>
          Sulaymaniyah
        </h3>
      </div>
    </div>
    <div className="right-section">
      <MyPostsCard>
        <div className="card-upper">
          <h3 className="post-number">5</h3>
        </div>
        <div className="card-lower">
          <h3 className="post-title">
            <a href="#">My posts</a>
          </h3>
        </div>
      </MyPostsCard>
      <PinnedPostCard>
        <div className="card-upper">
          <h3 className="post-number">5</h3>
        </div>
        <div className="card-lower">
          <h3 className="post-title">
            <a href="#">Pinned posts</a>
          </h3>
        </div>
      </PinnedPostCard>
    </div>
  </UpperSectionCont>
);

export default UpperSection;
