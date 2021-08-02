import React from "react";

import { Button } from "antd";

import { DownOutlined, UserOutlined } from "@ant-design/icons";

const SignedoutNavbar = () => (
  <div className="btn">
    <Button
      className="btn1"
      type="button"
      shape="circle"
      icon={<UserOutlined />}
    />

    <Button
      className="btn2"
      type="button"
      shape="circle"
      icon={<DownOutlined className="arrow" />}
    />
  </div>
);

export default SignedoutNavbar;
