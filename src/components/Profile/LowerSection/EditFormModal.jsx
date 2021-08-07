import React, { useState } from "react";
import { Modal, Button, Input, Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faUser, faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FormDiv, BtnDiv } from "./LowerSection.styled";

const EditFormModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextArea } = Input;

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
      <Button
        type="primary"
        onClick={showModal}
        style={{ color: "#1c1259", backgroundColor: "transparent", border: "none" }}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </Button>
      <Modal
        title="Edit information"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form action="#">
          <FormDiv>
            <Input
              size="large"
              placeholder="Full name"
              prefix={<FontAwesomeIcon icon={faUser} />}
              className="input-fields"
            />
          </FormDiv>
          <FormDiv>
            <Input
              size="large"
              placeholder="Email"
              prefix={<FontAwesomeIcon icon={faEnvelope} />}
              className="input-fields"
            />
          </FormDiv>
          <FormDiv>
            <Input
              size="large"
              placeholder="Facebook"
              prefix={<FontAwesomeIcon icon={faFacebook} />}
              className="input-fields"
            />
          </FormDiv>
          <FormDiv>
            <Input
              size="large"
              placeholder="Phone No."
              prefix={<FontAwesomeIcon icon={faPhoneAlt} />}
              className="input-fields"
            />
          </FormDiv>
          <FormDiv>
            <TextArea row="4" placeholder="Description" />
          </FormDiv>
          <BtnDiv>
            <button type="submit">Save changes</button>
          </BtnDiv>
        </form>
        <Divider orientation="left" style={{ color: "#1c1259" }}>
          Change password
        </Divider>
        <form action="">
          <FormDiv>
            <Input.Password
              placeholder="Current password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </FormDiv>
          <FormDiv>
            <Input.Password
              placeholder="New password"
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </FormDiv>
          <BtnDiv>
            <button type="submit">Change password</button>
          </BtnDiv>
        </form>
      </Modal>
    </>
  );
};

export default EditFormModal;
