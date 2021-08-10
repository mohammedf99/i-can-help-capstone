import React from "react";
import { Row } from "antd";
import { InfoStyled } from "./PostDetail.styled";

function DetailInfo({ title, text }) {
  return (
    <InfoStyled>
      {title}: {text}
    </InfoStyled>
  );
}

export default DetailInfo;
