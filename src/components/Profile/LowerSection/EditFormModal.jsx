import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Modal, Button, Input, Divider, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faUser,
  faEnvelope,
  faPhoneAlt,
  faBriefcase,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FormDiv, BtnDiv } from "./LowerSection.styled";
import DataContext from "../../../Utilities/Contexts/DataContext";
import { resetPassword, updateUser } from "src/Utilities/FirebaseUtilities";
import AuthContext from "src/Utilities/Contexts/AuthContext";

const EditFormModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextArea } = Input;
  const { Option } = Select;
  const { userData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const [values, setValues] = useState(userData);
  const { t } = useTranslation("profile");

  useEffect(() => {
    setValues(userData);
  }, [userData]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    updateUser(values, currentUser.uid).then(handleOk);
  };

  const onImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setValues((prev) => ({ ...prev, picture: file }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setValues((prev) => ({ ...prev }));
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        style={{
          color: "#1c1259",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </Button>
      <Modal
        title={t("editInfo")}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form>
          <FormDiv>
            <Input
              defaultValue={userData?.name}
              size="large"
              placeholder={t("name")}
              prefix={<FontAwesomeIcon icon={faUser} />}
              className="input-fields"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </FormDiv>
          <FormDiv>
            <Input
              defaultValue={userData?.job}
              size="large"
              placeholder={t("job")}
              prefix={<FontAwesomeIcon icon={faBriefcase} />}
              className="input-fields"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({ ...prev, job: e.target.value }));
              }}
            />
          </FormDiv>
          <FormDiv>
            <Input
              defaultValue={userData?.location}
              size="large"
              placeholder={t("location")}
              prefix={<FontAwesomeIcon icon={faLocationArrow} />}
              className="input-fields"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({ ...prev, location: e.target.value }));
              }}
            />
          </FormDiv>

          <FormDiv>
            <Input
              defaultValue={userData?.contact?.email}
              disabled
              size="large"
              placeholder="Email"
              prefix={<FontAwesomeIcon icon={faEnvelope} />}
              className="input-fields"
            />
          </FormDiv>

          <FormDiv>
            <Input
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, facebook: e.target.value },
                }));
              }}
              defaultValue={userData?.contact?.facebook}
              size="large"
              placeholder="Facebook"
              prefix={<FontAwesomeIcon icon={faFacebook} />}
              className="input-fields"
            />
          </FormDiv>
          <FormDiv>
            <Input
              defaultValue={userData?.contact?.phone}
              size="large"
              placeholder={t("phoneNo")}
              prefix={<FontAwesomeIcon icon={faPhoneAlt} />}
              className="input-fields"
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  contact: { ...prev?.contact, phone: e.target.value },
                }));
              }}
            />
          </FormDiv>
          <FormDiv>
            <TextArea
              rows={2}
              placeholder={t("description")}
              defaultValue={userData?.description}
              onChange={(e) => {
                e.persist();
                setValues((prev) => ({
                  ...prev,
                  description: e.target.value,
                }));
              }}
            />
          </FormDiv>
          <FormDiv>
            <h2>{t("updatePic")}</h2>
            <input type="file" placeholder="Update" onChange={onImageChange} />
          </FormDiv>
          <FormDiv>
            <h2>{t("gender")}</h2>
            <Select
              defaultValue={userData?.gender}
              size="large"
              // placeholder="Gender"
              prefix={<FontAwesomeIcon icon={faLocationArrow} />}
              className="input-fields"
              onSelect={(value) => {
                setValues((prev) => ({ ...prev, gender: value }));
              }}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value={null}>Prefer Not to say</Option>
            </Select>
          </FormDiv>
          <BtnDiv>
            <button onClick={handleSave} type="button">
              {t("saveChanges")}
            </button>
          </BtnDiv>
        </form>
        <BtnDiv>
          <button
            type="button"
            onClick={() => resetPassword(userData?.contact?.email)}
          >
            {t("changePass")}
          </button>
        </BtnDiv>
      </Modal>
    </>
  );
};

export default EditFormModal;
