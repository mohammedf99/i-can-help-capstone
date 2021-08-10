import { Row, Col } from "antd";
import router from "next/router";
import {
  ImageStyled,
  TitleStyled,
  DescriptionStyled,
  ImageWrapper,
  SecondaryButton,
  PrimaryButton,
  Container,
} from "./HomeHero.styled";

const HomeHero = () => (
  <Container>
    <Col style={{ flex: 1.2 }}>
      <TitleStyled>Hire the best workers in Kurdistan </TitleStyled>

      <DescriptionStyled>Find great talent. Build your business.</DescriptionStyled>

      <DescriptionStyled>Take your career to the next level.</DescriptionStyled>

      <Row>
        <SecondaryButton onClick={() => router.push({ pathname: "/search", query: { type: 2 } })}>
          Hire a talent
        </SecondaryButton>
        <PrimaryButton onClick={() => router.push({ pathname: "/search", query: { type: 1 } })}>
          Find a Job
        </PrimaryButton>
      </Row>
    </Col>
    <Col style={{ flex: 1.6 }}>
      <ImageWrapper>
        <ImageStyled src="https://images.unsplash.com/photo-1513692398020-cbaea622c427?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
      </ImageWrapper>
    </Col>
  </Container>
);

export default HomeHero;
