import React, { useState } from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { ContactBtn, ConModal } from "./Post.styled";

const ContactModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <ContactBtn type="primary" onClick={showModal}>
        <FontAwesomeIcon icon={faComments} className="msg-icon" /> Contact
      </ContactBtn>
      <ConModal
        title="NAME's contact information"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Row gutter={[8, 8]}>
          <Col span={24} className="col-style">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            mohammed@gmail.com
          </Col>
          <Col span={24} className="col-style">
            <span className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            mohammed.test
          </Col>
          <Col span={24} className="col-style">
            <span className="icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>
            +964-770-123-4567
          </Col>
          <Col span={24} className="col-style">
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            Sulaymaniyah, Iraq
          </Col>
        </Row>
      </ConModal>
    </>
  );
};

export default ContactModal;
