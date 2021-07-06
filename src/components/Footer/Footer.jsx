import React from "react";
import {
  FooterSty,
  LeftSideSty,
  LogoSty,
  FooterParaSty,
  SMWrapperSty,
  SMIconSty,
} from "./Footer.styled";

const Footer = () => (
  <FooterSty>
    <LeftSideSty>
      <LogoSty>I can help</LogoSty>
      <FooterParaSty>Copyright &copy; 2021 ICT team.</FooterParaSty>
      <FooterParaSty>All rights reserved.</FooterParaSty>
      <SMWrapperSty>
        <SMIconSty>GH</SMIconSty>
        <SMIconSty>FB</SMIconSty>
        <SMIconSty>YT</SMIconSty>
      </SMWrapperSty>
    </LeftSideSty>
  </FooterSty>
);

export default Footer;
