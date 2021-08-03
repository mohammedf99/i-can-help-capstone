import React from "react";

import { Button } from "antd";

import { DownOutlined, UserOutlined } from "@ant-design/icons";

const SignedoutNavbar = ({ auth }) => (
  <div className="btn">
    <Button
      className="btn1"
      type="button"
      shape="circle"
      icon={<UserOutlined />}
      onClick={() => auth.changeSigninVisible()}
    />

    <Button
      className="btn2"
      type="button"
      shape="circle"
      icon={<DownOutlined className="arrow" />}
      onClick={() => auth.changeSignupVisible()}
    />
  </div>
);

export default SignedoutNavbar;
