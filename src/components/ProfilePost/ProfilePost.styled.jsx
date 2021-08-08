import styled from "styled-components";
import { Card } from "antd";

export const PostCardCont = styled(Card)`
  border-radius: 10px;
  .ant-card-body {
    padding: 14px 16px;
  }
  a {
    color: #1c1259;
  }
  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  p {
    margin-top: 0.75rem;
  }
  margin-right: 0.5rem;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

export const PostCardBody = styled.div`
  display: flex;
  flex-direction: column;
  color: #1c1259;
  .upper-body {
    display: flex;
    justify-content: space-between;
  }
  .name,
  .salary {
    color: #1c1259;
    font-weight: 700;
    font-size: 1rem;
  }

  .middle-body {
    height: 70px;
    overflow: hidden;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    color: #4e4e9f;
  }
  .lower-body {
    display: flex;
    justify-content: flex-end;
  }

  button {
    color: #ff9b00;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }

  button:hover {
    background-color: #ff9b00;
    color: #ffffff;
  }
`;
