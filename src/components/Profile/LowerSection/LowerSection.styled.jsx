import styled from "styled-components";
import { Tag } from "antd";

export const ProfileDetailCont = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #cacaea;
  color: #1c1259;
  box-sizing: border-box;
`;

export const LeftSection = styled.div`
  width: 50%;
  padding: 1rem;
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  border-right: 2px solid #1c1259;

  .detail-titles {
    font-size: 2rem;
    font-weight: 700;
    color: #1c1259;
  }

  .detail-paragraph {
    width: 90%;
    height: auto;
    font-weight: 500;
  }

  .tags-div {
    margin: 1rem 0rem 1rem 0rem;
  }

  .lang-input-div {
    width: 90%;
    height: 100px;
    background-color: #fafaff;
    margin-top: 1rem;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 0 2rem 0 2rem;
  }

  input {
    height: 50px;
    border-radius: 50px;
    width: 450px;
    padding-left: 1rem;
    border: 1px solid #9dafbd;
    outline: none;
  }

  .lang-button {
    margin-left: 1rem;
    width: 110px;
    height: 50px;
    border-radius: 50px;
    border: none;
    outline: none;
    color: #fafaff;
    background-color: #1c1259;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .lang-button:hover {
    opacity: 0.9;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  padding: 1rem 0rem 0rem 4rem;
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;

  .contact-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  .detail-titles {
    font-size: 2rem;
    font-weight: 700;
    color: #1c1259;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .contact-info-div {
    margin-bottom: 2rem;
  }

  .contact-icons {
    margin-right: 1rem;
  }

  .setting-lang-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;
  }

  .setting-lang-title {
    color: #1c1259;
    font-size: 1.25rem;
    margin-right: 1rem;
  }

  .setting-lang-btn {
    border: 1px solid #ee4266;
    color: #ee4266;
    margin-right: 1rem;
    border-radius: 5px;
    padding: 0rem 1rem;
  }

  .setting-lang-btn:hover,
  .setting-lang-btn:active {
    color: #fafaff;
    background-color: #ee4266;
  }
`;

export const LangTags = styled(Tag)`
  color: #fafaff;
  font-size: 1rem;
  padding: 0.75rem 1.75rem;
  background-color: #1c1259;
  border-radius: 25px;
`;

// Modal styles

export const FormDiv = styled.div`
  margin-bottom: 0.5rem;

  textarea {
    resize: none;
    width: 100%;
    height: 100px;
    outline: none;
    padding-left: 0.5rem;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    color: #1c1259;
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
  }

  button:hover {
    background-color: #1c1259;
    color: #fafaff;
  }
`;
