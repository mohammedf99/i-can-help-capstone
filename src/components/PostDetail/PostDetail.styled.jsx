import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #cacaea;
  padding-block: 40px;
  width: 80%;
  margin: 10%;
  margin-block: 2%;
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(000, 000, 000, 0.2);
`;

export const PrimaryButton = styled(Button)`
  background-color: #ff9b00;
  color: white;
  border-radius: 40px;
  font-size: 24px;
  height: 58px;
  width: 150px;
  box-shadow: 0px 6px 15px rgba(000, 000, 000, 0.2);
`;

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  color: #ff9b00;
  border-radius: 40px;
  font-size: 24px;
  height: 58px;
  width: 150px;
  border: 1px #ff9b00 solid;
  box-shadow: 0px 6px 15px rgba(000, 000, 000, 0.2);
`;
