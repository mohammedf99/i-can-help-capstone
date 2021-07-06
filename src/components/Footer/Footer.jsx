import React from "react";
import {
  FooterSty,
  LeftSideSty,
  LogoSty,
  FooterParaSty,
  SMWrapperSty,
  SMIconSty,
  RightSideSty,
  RightSectSty,
  FooterH2Sty,
  Ul,
  Li,
  ContactDivSty,
  InputDivSty,
  InputSty,
  InputIconSty,
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
    <RightSideSty>
      <RightSectSty>
        <FooterH2Sty>Company</FooterH2Sty>
        <Ul>
          <Li>About us</Li>
          <Li>Blog</Li>
          <Li>Contact us</Li>
          <Li>Testimonials</Li>
        </Ul>
      </RightSectSty>
      <RightSectSty>
        <FooterH2Sty>Support</FooterH2Sty>
        <Ul>
          <Li>Help center</Li>
          <Li>Terms of service</Li>
          <Li>Legal</Li>
          <Li>Privacy policy</Li>
        </Ul>
      </RightSectSty>
      <ContactDivSty>
        <FooterH2Sty>Contact Us</FooterH2Sty>
        <form>
          <InputDivSty>
            <InputSty placeholder="Enter your email" />
            <InputIconSty>S</InputIconSty>
          </InputDivSty>
        </form>
      </ContactDivSty>
    </RightSideSty>
  </FooterSty>
);

export default Footer;
