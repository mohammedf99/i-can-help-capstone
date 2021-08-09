import styled from "styled-components";
import { Row, Col } from "antd";

export const TitleStyled = styled.h1`
  font-size: 48px;
  color: white;
  font-weight: 900;
  font-family: roboto;
`;
export const DescriptionStyled = styled.p`
  font-size: 18px;
  font-family: roboto;
  color: white;
`;

export const RowStyled = styled(Row)`
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
export const ColStyled = styled(Col)`
  flex: 1;
  border-inline: 1px solid rgba(255, 255, 255, 0.4);

  @media only screen and (max-width: 1000px) {
    border-block: 1px solid rgba(255, 255, 255, 0.4);
  }
`;
