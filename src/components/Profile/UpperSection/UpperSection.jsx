import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { ProImgDiv, ProUserName, WorkTitle, LocationText, MyPostsDiv, MyPinsDiv, numOfPosts } from "./UpperSection.styled";

const UpperSection = () => (
  <section>
    <Row>
      <Col span={8}>
        <Row>
          <Col span={8}>
            <ProImgDiv>
              <img src="#" alt="profile" />
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
                <FontAwesomeIcon icon={faMapMarkerAlt} className="pink-icon" />
                <LocationText>Erbil, IQ</LocationText>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Row>
            <Col span={8}>
                <MyPostsDiv>
                  <div className="postTitle">
                    <h3>My posts</h3>
                  </div>
                  <span className="numOfPosts">20</span>
                </MyPostsDiv>
            </Col>
            <Col span={8}>
                <MyPinsDiv><h1>Pinned posts</h1></MyPinsDiv>
            </Col>
        </Row>
      </Col>
    </Row>
  </section>
);

export default UpperSection;
