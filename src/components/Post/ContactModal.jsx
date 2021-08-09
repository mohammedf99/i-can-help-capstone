import React, { useState } from "react";
import { useTranslation } from "next-i18next";
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

const ContactModal = ({ button, user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation("common");

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
      {button ? (
        button({ onClick: () => showModal() })
      ) : (
        <ContactBtn type="primary" onClick={showModal}>
          <FontAwesomeIcon icon={faComments} className="msg-icon" /> {t("contact")}
        </ContactBtn>
      )}
      <ConModal
        title={`${user?.name} ${t("userContactInfo")}`}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Row gutter={[8, 8]}>
          {user?.contact?.email && (
            <Col span={24} className="col-style">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              {user?.contact?.email}
            </Col>
          )}
          {user?.contact?.facebook && (
            <Col span={24} className="col-style">
              <span className="icon">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              {user?.contact?.facebook}
            </Col>
          )}
          {user?.contact?.phone && (
            <Col span={24} className="col-style">
              <span className="icon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              {user?.contact?.phone}
            </Col>
          )}
          {user?.location && (
            <Col span={24} className="col-style">
              <span className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              {user?.location}
            </Col>
          )}
        </Row>
      </ConModal>
    </>
  );
};

export default ContactModal;
