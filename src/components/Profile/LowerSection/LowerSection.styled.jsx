import styled from "styled-components";
import {Tag} from "antd";


export const DetailsCont = styled.div`
  background-color: #cacaea;
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 5px;
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafaff;
  border-radius: 50px;
  width: 90%;
  height: 80px;
  margin-top: 30px;
`;

export const LangInp = styled.input`
 border-radius: 50px;
 border: 2px solid #D1DBE3;
 width: 500px;
 height: 60px;
 margin-left: 10px;
 padding-left: 20px;
 color: #1C1259;
 outline: 0;
`;

export const InpBtn = styled.button`
  color: #fafaff;
  background-color: #1c1259;
  width: 145px;
  height: 60px;
  border-radius: 50px;
  border: 0;
  outline: 0;
  margin-left: 5px;
  font-weight: 700;
  font-size: 1rem;
`;

export const Ul = styled.ul`
  color: #1c1259;
  list-style-type: none;
  padding-left: 0;
`;

export const Li = styled.li`
  margin-bottom: 1rem;
`;