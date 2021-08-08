import { Col, Row } from "antd";
import { TitleStyled, DescriptionStyled } from "./StatsCounter.styled";
import CounterBg from "./BackgroundSvg";
import Counter from "./Counter";

function StatsCounter() {
  return (
    <div>
      <CounterBg />
      <div style={{ textAlign: "center", padding: "64px" }}>
        <TitleStyled>Some Count that matters</TitleStyled>
        <DescriptionStyled>
          Our achievement in the journey depicted in numbers
        </DescriptionStyled>
        <Row>
          <Col span={6}>
            <Counter title="+35" sub="Categories" />
          </Col>

          <Col
            span={6}
            style={{ borderInline: "1px  solid rgba(255,255,255,0.4)" }}
          >
            <Counter title="30" sub="Fortune 500 employees" />
          </Col>

          <Col
            span={6}
            style={{ borderRight: "1px  solid rgba(255,255,255,0.4)" }}
          >
            <Counter title="300" sub="Workers" />
          </Col>

          <Col span={6}>
            <Counter title="3" sub="Years of Journey" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StatsCounter;
