import React, { useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  ProfileDetailCont,
  LeftSection,
  RightSection,
  LangTags,
} from "./LowerSection.styled";
import EditFormModal from "./EditFormModal";
import DataContext from "src/Utilities/Contexts/DataContext";
import { addLanguage, removeLanguage } from "src/Utilities/FirebaseUtilities";
import AuthContext from "src/Utilities/Contexts/AuthContext";

const LowerSection = () => {
  const { userData } = useContext(DataContext);
  const { currentUser } = useContext(AuthContext);
  const [language, setLanguage] = useState(null);
  const { t } = useTranslation("profile");

  const handleAddLanguage = () => {
    if (language && language !== "") addLanguage(currentUser?.uid, language);
  };

  const handleRemoveLanguage = (language) => {
    if (language && language !== "") removeLanguage(currentUser?.uid, language);
  };

  return (
    <ProfileDetailCont>
      <LeftSection>
        <h2 className="detail-titles">{t("description")}</h2>
        <p className="detail-paragraph">{userData?.description}</p>
        <h2 className="detail-titles">{t("languages")}</h2>
        <div className="tags-div">
          {userData?.languages?.map((language) => (
            <LangTags
              closable
              onClose={() => handleRemoveLanguage(language)}
              closeIcon={
                <FontAwesomeIcon icon={faTimesCircle} color="white" size="2x" />
              }
            >
              <span style={{ paddingInline: "10px", fontSize: "18px" }}>
                {language}
              </span>
            </LangTags>
          ))}
        </div>
        <div className="lang-input-div">
          <form>
            <input
              type="text"
              placeholder={t("addLang")}
              onChange={(e) => setLanguage(e.target.value)}
            />
            <button
              className="lang-button"
              type="button"
              onClick={handleAddLanguage}
            >
              {t("add")}
            </button>
          </form>
        </div>
      </LeftSection>
      <RightSection>
        <div className="contact-div">
          <h2 className="detail-titles">{t("contact")}</h2>
          <EditFormModal />
        </div>
        <div className="contact-info-div">
          <ul>
            {userData?.contact?.email && (
              <li>
                <span className="contact-icons">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                {userData?.contact?.email}
              </li>
            )}
            {userData?.contact?.facebook && (
              <li>
                <span className="contact-icons">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
                {userData?.contact?.facebook}
              </li>
            )}
            {userData?.contact?.phone && (
              <li>
                <span className="contact-icons">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                {userData?.contact?.phone}
              </li>
            )}
          </ul>
        </div>
        <h3 className="detail-titles">{t("gender")}</h3>
        <p style={{ color: "#1C1259", fontWeight: "bold" }}>
          {userData?.gender || "Prefer not to say"}
        </p>
      </RightSection>
    </ProfileDetailCont>
  );
};

export default LowerSection;
