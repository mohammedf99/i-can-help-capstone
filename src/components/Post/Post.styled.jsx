import styled from "styled-components";
import { Tag, Button, Modal } from "antd";

export const PostDiv = styled.div`
  box-sizing: border-box;
  width: 99%;
  height: auto;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  border: 1.5px solid #4e4e9f;
  border-radius: 5px;
  background-color: #fafaff;
  margin-bottom: 1rem;

  &:hover {
    border: 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-bottom: 1.25rem;
  }

  .post-upper-section {
    display: flex;
    flex-direction: row;
  }

  .upper-left {
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  .user-type {
    font-size: 18px;
    color: #4e4e9f;
    font-weight: 600;
  }

  .user-full-name {
    font-size: 22px;
    color: #1c1259;
    text-transform: uppercase;
    font-weight: 700;
  }

  .post-desc {
    font-size: 18px;
    color: #4e4e9f;
  }

  .upper-right {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .post-lower-section {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .lower-left {
    width: 60%;
  }

  .lower-right {
    width: 40%;
    display: flex;
    justify-content: flex-end;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
    
    .post-upper-section {
      flex-direction: column;
    }

    .upper-right,
    .upper-left {
      width: 100%;
    }

    .user-full-name {
      font-size: 18px;
    }

    .user-type {
      font-size: 16px;
    }

    .upper-right {
      justify-content: start;
    }
    .lower-left {
      width: 40%;
    }
    
    .lower-right {
      width: 60%;
      justify-content: flex-end;
      align-items: center;
    }
  }
`;

export const LocationTag = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid #ee4266;
  color: #ee4266;
  width: 95%;
  height: 40px;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 1rem;

  p {
    margin: 0;
    padding: 0;
  }

  .address {
    padding-left: 100px;
  }

  @media only screen and (max-width: 1200px) {
    .address {
      padding-left: 40px;
    }
  }

  @media only screen and (max-width: 992px) {
    .address {
      padding-left: 20px;
      font-size: 0.85rem;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 50%;
    margin: 0;
    font-size: 0.75rem;
    .address {
      padding-left: 30%;
    }
  }

  @media only screen and (max-width: 600px) {
    .address {
      padding-left: 50px;
    }
  }
`;

export const Tags = styled(Tag)`
  color: #ee4266;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 1px solid #ee4266;
  margin-right: 0.5rem;
  background-color: transparent;

  @media only screen and (max-width: 600px) {
    padding: 0.25rem 0.5rem;
  }
`;

export const PinButton = styled.button`
  display: flex;
  color: #1c1259;
  background-color: transparent;
  border: 1px solid #1c1259;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  font-size: 1rem;
  width: 175px;

  &:hover {
    background-color: #1c1259;
    color: #fafaff;
    outline: none;
    transition: all 0.5s 0s ease;
  }

  .pin-icon {
    margin-right: 50px;
    align-self: center;
  }

  @media only screen and (max-width: 1200px) {
    .pin-icon {
      margin-right: 30px;
    }
  }

  @media only screen and (max-width: 992px) {
    .pin-icon {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 35px;
    align-items: center;

    .pin-icon {
      margin-right: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 100px;
    height: 30px;
    font-size: 0.75rem;
  }

`;

export const ContactBtn = styled(Button)`
  background-color: transparent;
  border: 1px solid #1c1259;
  width: 175px;
  height: 45px;
  color: #1c1259;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  font-size: 1rem;

  &:hover {
    background-color: #1c1259;
    color: #fafaff;
    outline: none;
    transition: all 0.5s 0s ease;
  }

  .msg-icon {
    margin: 0px 30px 0px -30px;
  }

  &:focus {
    background-color: #cacaea;
    border: none;
    outline: none;
  }


  @media only screen and (max-width: 1200px) {
    .msg-icon {
      margin: 0px 15px 0px -15px;
    }
  }

  @media only screen and (max-width: 992px) {
    .msg-icon {
      margin: 0px 10px 0px -10px;
    }
  }
  
  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 35px;
    display: flex;
    align-items: center;

    .msg-icon {
      margin: 0px 10px 0px -5px;
    }

    @media only screen and (max-width: 600px) {
      width: 100px;
      height: 30px;
      font-size: 0.75rem;
    }
`;

export const ConModal = styled(Modal)`
  .col-style {
    width: fit-content;
    box-sizing: border-box;
    font-size: 1rem;
    border: 1px solid #1c1259;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #1c1259;
    transition: all 0.5s 0s ease-in-out;
  }

  .col-style:hover {
    color: #ee4266;
    border: 1px solid #ee4266;
    font-size: 1.25rem;
    transition: all 0.5s 0s ease-in-out;
  }

  .icon {
    margin: 0 1rem 0 1rem;
  }
`;
