import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  ProImgDiv,
  ProUserName,
  WorkTitle,
  LocationText,
  MyPostsDiv,
  PinnedPostsDiv,
} from "./UpperSection.styled";

const UpperSection = () => (
  <section>
    <Row>
      <Col span={8}>
        <Row>
          <Col span={8}>
            <ProImgDiv>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="profile"
              />
            </ProImgDiv>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <ProUserName>John Doe</ProUserName>
              </Col>
              <Col span={24}>
                <WorkTitle>Gardner</WorkTitle>
              </Col>
              <Col span={24}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#EE4266" }} />
                <LocationText>Erbil, IQ</LocationText>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Row>
          <Col span={8}>
            <MyPostsDiv className="post-card">
              <div className="card-upper">
                <h2>5</h2>
              </div>
              <div className="card-lowe">
                <h3>
                  <a href="#">My posts</a>
                </h3>
              </div>
            </MyPostsDiv>
          </Col>
          <Col span={8}>
            <PinnedPostsDiv className="card">
              <div className="card-upper">
                <h2>5</h2>
              </div>
              <div className="card-lower">
                <h3>
                  <a href="#">Pinned posts</a>
                </h3>
              </div>
            </PinnedPostsDiv>
          </Col>
        </Row>
      </Col>
    </Row>
  </section>
);

export default UpperSection;
