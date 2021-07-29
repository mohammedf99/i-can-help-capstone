import { Row, Typography, Col } from "antd";
import { ImageStyled } from "./HomeHero.styled";

const HomeHero = () => (
  <Row style={{ margin: "10px" }}>
    <Col span={8}>
      <Typography.Title>Hire the best workers in Kurdistan </Typography.Title>
      <Typography.Paragraph>
        Find great talent. Build your business. Take your career to the next
        level.
      </Typography.Paragraph>
    </Col>
    <Col span={16}>
      <ImageStyled src="https://images.unsplash.com/photo-1513692398020-cbaea622c427?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
    </Col>
  </Row>
);

export default HomeHero;
