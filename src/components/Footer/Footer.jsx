import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

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

const Footer = () => (
  <FooterSty>
    <Row>
      <Col span={12}>
        <Row>
          <Col span={24}>
            <LogoSty>I can help</LogoSty>
          </Col>
          <Col span={24}>
            <FooterParaSty>Copyright &copy; 2021 ICH team.</FooterParaSty>
            <FooterParaSty>All rights reserved.</FooterParaSty>
          </Col>
          <Col span={24}>
            <SMWrapperSty>
              <SMIconSty>
                <FontAwesomeIcon icon={faFacebook} />
              </SMIconSty>
              <SMIconSty>
                <FontAwesomeIcon icon={faGithub} />
              </SMIconSty>
              <SMIconSty>
                <FontAwesomeIcon icon={faYoutube} />
              </SMIconSty>
            </SMWrapperSty>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row>
          <Col span={7}>
            <FooterH2Sty>Company</FooterH2Sty>
            <Ul>
              <Li>About us</Li>
              <Li>Blog</Li>
              <Li>Contact us</Li>
              <Li>Testimonials</Li>
            </Ul>
          </Col>
          <Col span={7}>
            <FooterH2Sty>Support</FooterH2Sty>
            <Ul>
              <Li>Help center</Li>
              <Li>Terms of service</Li>
              <Li>Legal</Li>
              <Li>Privacy prolicy</Li>
            </Ul>
          </Col>
          <Col span={10}>
            <FooterH2Sty>Contact Us</FooterH2Sty>
            <form action="">
              <InputDivSty>
                <InputSty placeholder="Enter your email" />
                <InputIconSty>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </InputIconSty>
              </InputDivSty>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  </FooterSty>
);

export default Footer;
