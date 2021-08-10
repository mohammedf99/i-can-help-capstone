import styled from "styled-components";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width:100%
  margin-top: 70px;
  margin-bottom: 140px;
  padding: 40px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    margin-top: 10px;
    height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  perspective: 1200px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const ImageStyled = styled.img`
  width: 750px;
  border-radius: 8px;
  transform: rotateY(20deg);

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 72px;
  color: #1c1259;
  font-weight: 900;
  line-height: 98px;
  font-family: Roboto;
`;
export const DescriptionStyled = styled.p`
  font-size: 18px;
  color: #1c1259;
  font-weight: normal;
  line-height: 32px;
  font-family: Roboto;
`;

export const PrimaryButton = styled(Button)`
  background-color: #ff9b00;
  color: white;
  border-radius: 40px;
  font-size: 24px;
  height: 58px;
  box-shadow: 0px 6px 15px rgba(000, 000, 000, 0.2);
  margin: 10px;
  font-family: Roboto;
  font-weight: 700;
  font-weight: 700;
  padding: 30px;
  align-items: center;
  display: flex;
`;

export const SecondaryButton = styled(Button)`
  background-color: #fff;
  color: #ff9b00;
  border-radius: 40px;
  font-size: 24px;
  height: 58px;
  border: 1px #ff9b00 solid;
  box-shadow: 0px 6px 15px rgba(000, 000, 000, 0.2);
  margin: 10px;
  font-weight: 700;
  padding: 30px;
  align-items: center;
  display: flex;
`;
