import { Row, Col } from "antd";
import router from "next/router";
import {
  ImageStyled,
  TitleStyled,
  DescriptionStyled,
  ImageWrapper,
  SecondaryButton,
  PrimaryButton,
} from "./HomeHero.styled";

const HomeHero = () => (
  <Row style={{ height: "81vh", margin: "40px", marginTop: "70px" }}>
    <Col span={10}>
      <TitleStyled>Hire the best workers in Kurdistan </TitleStyled>

      <DescriptionStyled>
        Find great talent. Build your business.
      </DescriptionStyled>

      <DescriptionStyled>Take your career to the next level.</DescriptionStyled>

      <Row>
        <SecondaryButton onClick={() => router.push("/search")}>
          Hire a talent
        </SecondaryButton>
        <PrimaryButton onClick={() => router.push("/search")}>
          Find a Job
        </PrimaryButton>
      </Row>
    </Col>
    <Col span={14}>
      <ImageWrapper>
        <ImageStyled src="https://images.unsplash.com/photo-1513692398020-cbaea622c427?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      </ImageWrapper>
    </Col>
  </Row>
);

export default HomeHero;
