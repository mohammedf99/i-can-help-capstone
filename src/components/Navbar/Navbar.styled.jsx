/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Navbar = styled.div`
  .Navbar {
    font-family: Roboto;
    color: #1c1259;
    min-height: 10vh;
    background: FFFFFF;
    box-shadow: 0px 1px 10px #aaa;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .site-logo {
    margin-left: 35px;
    width: 20%;
  }
  .site-logo h1 {
    color: #1c1259;
    font-style: normal;
    font-size: 36px;
    line-height: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  .Searchbtn {
    border: 1px solid #1c1259;
    box-sizing: border-box;
    border-radius: 40px;

    width: 263px;
  }
  .ant-input-lg {
    color: #1c1259;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem 0 0;
    margin-top: 30px;
    width: 55%;
    color: #1c1259;
  }
  .btn {
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .btn1 {
    margin-right: 5px;
    background: #ffffff;
    border: 1px solid #1c1259;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }
  .btn1:hover {
    background: #1c1259;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    width: 30%;
  }
  .btn1:hover::after {
    content: "Login";
    color: white;
    border: 1px solid black;
  }
  .btn2 {
    margin-right: 5px;
    background: #ffffff;
    border: 1px solid #1c1259;
    transition: all 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }

  .btn2:hover {
    background: #1c1259;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    width: 30%;
  }

  .btn2:hover::after {
    content: "Sign Up";
    color: white;
    border: 1px solid black;
  }

  .arrow {
    transition: all 0.2s;
  }

  .arrow:hover {
    transform: rotate(-90deg);
    color: white;
    display: flex;
    flex-direction: row-reverse;
  }

  .navcontent {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .navconntent:first-child,
  .navcontent:last-child {
    margin: 0;
  }
  .navcontent a {
    margin: 0 1rem;
  }

  .navcontent a {
    display: flex;
    color: #1c1259;
    justify-content: space-evenly;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  }
  .anticon-search {
    margin-top: 5px;
  }
  .avatar:hover {
    cursor: pointer;
  }
`;
