import React, { useState } from "react";
import { useRouter } from "next/router";
import { Form, Button } from "antd";
import { signIn } from "../../Utilities/FirebaseUtilities";
import Checkbox from "../Checkbox/Checkbox";
import {
  InputStyled,
  InputPasswordStyled,
  HeaderStyled,
  ButtonStyled,
  CardStyled,
  TitleStyled,
  BackDrop,
} from "../SignUp/SignUp.styled";

const EmailIconSVG = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.9805 4.78218C19.9935 4.80901 20 4.83584 20 4.86267V15.2462C20 15.7828 19.8698 16.2926 19.6094 16.7755C19.349 17.2585 18.9583 17.5 18.4375 17.5H2.1875C1.66666 17.5 1.17188 17.2585 0.703125 16.7755C0.234373 16.2926 0 15.7828 0 15.2462V4.86267C0 4.83584 0.00651045 4.80901 0.0195313 4.78218C-0.00651045 4.68827 -0.00651045 4.59772 0.0195313 4.51051C0.0455731 4.42331 0.0911456 4.33947 0.15625 4.25898C0.169271 4.24556 0.182292 4.22879 0.195313 4.20867C0.208333 4.18854 0.227865 4.17178 0.253906 4.15836C0.44922 3.89005 0.72591 3.68547 1.08398 3.54461C1.44206 3.40374 1.80989 3.33331 2.1875 3.33331H18.4375C18.8542 3.33331 19.1895 3.42387 19.4434 3.60497C19.6973 3.78608 19.8633 4.05774 19.9414 4.41996C19.9674 4.47362 19.9837 4.53064 19.9902 4.59101C19.9967 4.65138 19.9935 4.7151 19.9805 4.78218ZM1.89453 4.62128C1.79036 4.62128 1.6862 4.62799 1.58203 4.6414L10 11.5638L18.4375 4.62128H1.89453ZM18.4375 16.212C18.6068 16.212 18.7012 16.0946 18.7207 15.8599C18.7402 15.6251 18.75 15.4205 18.75 15.2461V6.02972L10.4102 12.8917C10.3451 12.9454 10.2799 12.9856 10.2148 13.0124C10.1497 13.0393 10.0781 13.0527 10 13.0527C9.92187 13.0527 9.85026 13.0393 9.78516 13.0124C9.72005 12.9856 9.65495 12.9454 9.58984 12.8917L1.25 6.02972V15.2461C1.25 15.4205 1.36393 15.6251 1.5918 15.8599C1.81966 16.0946 2.01823 16.212 2.1875 16.212H18.4375Z"
      fill="#959393"
    />
  </svg>
);

function SignInForm({ isVisible, backgroundClick }) {
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const route = useRouter();

  return isVisible ? (
    <div>
      <BackDrop onClick={backgroundClick}>
        <CardStyled onClick={(e) => e.stopPropagation()}>
          <Form>
            <HeaderStyled>Sign In</HeaderStyled>
            <TitleStyled>Sign in now to start helping!</TitleStyled>

            <Form.Item>
              <InputStyled
                placeholder="  Email"
                prefix={<EmailIconSVG />}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </Form.Item>

            <Form.Item>
              <InputPasswordStyled
                placeholder="Password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </Form.Item>

            <Form.Item style={{ textAlign: "left" }}>
              <Checkbox
                label="Remember me"
                change={(value) => setData({ ...data, remember: value })}
              />
            </Form.Item>

            <Form.Item>
              <ButtonStyled
                type="primary"
                htmlType="submit"
                onClick={() => signIn(data, () => route.push("home"))}
              >
                Sign in
              </ButtonStyled>
            </Form.Item>

            <Form.Item />

            <Form.Item>
              <Button
                type="text"
                style={{ color: "#1c1259", fontFamily: "Roboto" }}
              >
                Forgot password?
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                type="text"
                style={{ color: "#1c1259", fontFamily: "Roboto" }}
              >
                Don't have account yet?
              </Button>
            </Form.Item>
          </Form>
        </CardStyled>
      </BackDrop>
    </div>
  ) : (
    <></>
  );
}

export default SignInForm;
