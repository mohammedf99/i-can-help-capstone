import { Button, Input, Card } from "antd";
import styled from "styled-components";

export const BackDrop = styled.div`
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
`;

export const CardStyled = styled(Card)`
  width: 50%;
  left: 25%;
  top: 11%;
  position: fixed;
  text-align: center;
  border-radius: 40px;
  padding-inline: 10%;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.25);
`;

export const HeaderStyled = styled.h2`
  font-size: 60px;
  color: #1c1259;
  font-family: Roboto;
`;

export const TitleStyled = styled.p`
  font-size: 14px;
  color: #1c1259;
  font-family: Roboto;
  line-height: 24px;
  font-weight: 300;
`;

export const InputStyled = styled(Input)`
  border: 1px solid #eaeaea;
  border-radius: 3px;
  height: 20%;
  width: 100%;
  padding: 12px;
`;
export const InputPasswordStyled = styled(Input.Password)`
  border: 1px solid #eaeaea;
  border-radius: 3px;
  height: 20%;
  width: 100%;
  padding: 12px;
`;

export const ButtonStyled = styled(Button)`
  background-color: #1c1259;
  border-radius: 32px;
  font-size: 24px;
  width: 100%;
  height: 5%;
  font-family: Roboto;
  font-weight: bold;
`;
