import React from "react";
import { Row, Col } from "antd";
import { FooterSty, LogoSty, FooterParaSty, SMWrapperSty, SMIconSty, FooterH2Sty } from "./Footer.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              <SMIconSty><FontAwesomeIcon icon="facebook" /></SMIconSty>
              <SMIconSty />
              <SMIconSty />
            </SMWrapperSty>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row>
            <Col span={7}>
                <FooterH2Sty>Company</FooterH2Sty>
            </Col>
            <Col span={7}>
                <FooterH2Sty>Support</FooterH2Sty>
            </Col>
            <Col span={10}>
                <FooterH2Sty>Contact Us</FooterH2Sty>
            </Col>
        </Row>
      </Col>
    </Row>
  </FooterSty>
);

export default Footer;
