import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "next-i18next";
import Menu from "./LangDropdown";

import {
  FooterSty,
  LogoSty,
  FooterParaSty,
  SMWrapperSty,
  SMIconSty,
  FooterH2Sty,
  Ul,
  Li,
  InputDivSty,
  InputSty,
  InputIconSty,
} from "./Footer.styled";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <FooterSty>
      <Row>
        <Col xs={24} sm={12} md={12}>
          <Row>
            <Col span={24}>
              <LogoSty>I can help</LogoSty>
            </Col>
            <Col span={24}>
              <FooterParaSty>{t("copyright")}</FooterParaSty>
              <FooterParaSty>{t("allRightsReserved")}</FooterParaSty>
            </Col>
            <Col span={24}>
              <SMWrapperSty>
                <SMIconSty>
                  <a href="#" className="a-no-style">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </SMIconSty>
                <SMIconSty>
                  <a href="#" className="a-no-style">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </SMIconSty>
                <SMIconSty>
                  <a href="#" className="a-no-style">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </SMIconSty>
              </SMWrapperSty>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Row>
            <Col xs={12} sm={12} md={7}>
              <FooterH2Sty>{t("company")}</FooterH2Sty>
              <Ul>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("aboutUs")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("blog")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("contactUs")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("testimonial")}
                  </a>
                </Li>
              </Ul>
            </Col>
            <Col xs={12} sm={12} md={7}>
              <FooterH2Sty>{t("support")}</FooterH2Sty>
              <Ul>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("helpCenter")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("termsOfService")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("legal")}
                  </a>
                </Li>
                <Li>
                  <a href="#" className="a-no-style">
                    {t("privacyPolicy")}
                  </a>
                </Li>
              </Ul>
            </Col>
            <Col xs={24} sm={24} md={10}>
              <FooterH2Sty>{t("contactUs")}</FooterH2Sty>
              <div>
                <InputDivSty>
                  <InputSty placeholder={t("enterYourEmail")} />
                  <InputIconSty>
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </InputIconSty>
                </InputDivSty>
              </div>
              <div className="menu-div">
                <Menu className="menu" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </FooterSty>
  );
};

export default Footer;
