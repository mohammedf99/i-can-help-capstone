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
`;
