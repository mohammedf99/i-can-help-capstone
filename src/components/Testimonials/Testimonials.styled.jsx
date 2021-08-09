import styled from "styled-components";

export const TestimonialsSection = styled.div`
  background-color: #f4f5f7;
  padding: 2rem 10%;

  @media screen and(max-width:1000px) {
    align-content: center;
  }
  .title-wrapper {
    margin: 0 auto;
    text-align: center;
  }
  h1,
  h3 {
    color: #1c1259;
  }
  h1 {
    font-size: 3rem;
  }
  h3 {
    font-size: 1.125rem;
    margin: 0 0 2rem 0;
  }
  .slick-dots li button {
    height: 14px;
    width: 12.703702926635742px;
    left: 18.148193359375px;
    top: 0px;
    border-radius: 50%;
    top: 0%;
    bottom: 0%;
    border: 3px solid #2ec5ce;
    box-sizing: border-box;
  }
  .slick-dots li.slick-active button {
    background-color: #2ec5ce;
  }
  h2 {
    color: #1c1259;
    text-align: center;
  }
  p {
    color: #1c1259;
    text-align: center;
  }
  span {
    color: #474a57;
  }
`;

export const TestimonialsListContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CustomCardStyle = styled.div`
  width: 30%;
  margin:2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .card {
    width: 100%;
    margin: 2rem;
  }
  .card:after {
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - 10px);
    background: #ffffff;
    width: 20px;
    height: 20px;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .details {
    width: 100%;
    text-align: center;
  }
  .imgbx {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  .imgbx img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
      width: 40%:
  }

  @media screen and (max-width: 830px){
    width: 100%;
}
`;
