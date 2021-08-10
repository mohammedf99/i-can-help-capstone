import React from "react";
import { Col, Row } from "antd";
import { TitleStyled, DescriptionStyled, RowStyled, ColStyled } from "./StatsCounter.styled";
import CounterBg from "./BackgroundSvg";
import Counter from "./Counter";

function StatsCounter() {
  return (
    // <div>
    // {/* <CounterBg /> */}
    <div
      style={{
        width: "100%",
        textAlign: "center",
        padding: "64px",
        backgroundColor: "#FF9B00",
      }}
    >
      <TitleStyled>Some Count that matters</TitleStyled>
      <DescriptionStyled>Our achievement in the journey depicted in numbers</DescriptionStyled>
      <RowStyled>
        <ColStyled>
          <Counter title="+35" sub="Categories" />
        </ColStyled>

        <ColStyled>
          <Counter title="30" sub="Fortune 500 employees" />
        </ColStyled>

        <ColStyled>
          <Counter title="300" sub="Workers" />
        </ColStyled>

        <ColStyled>
          <Counter title="3" sub="Years of Journey" />
        </ColStyled>
      </RowStyled>
    </div>
    // </div>
  );
}

export default StatsCounter;
