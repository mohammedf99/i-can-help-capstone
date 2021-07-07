import React from "react";
import { Row, Col } from "antd";
import { FooterSty, LogoSty, FooterParaSty, SMWrapperSty, SMIconSty } from "./Footer.styled";

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
              <SMIconSty />
              <SMIconSty />
              <SMIconSty />
            </SMWrapperSty>
          </Col>
        </Row>
      </Col>
      <Col span={12}>
        <h1>right side</h1>
      </Col>
    </Row>
  </FooterSty>
);

export default Footer;
