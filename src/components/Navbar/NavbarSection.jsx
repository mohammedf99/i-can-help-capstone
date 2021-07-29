import React from "react";
// import { Button } from "antd";
import { Navbar } from "./Navbar.styled";
import { Button, Tooltip } from "antd";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";

const NavbarSection = () => (
  <Navbar>
    <div className="Navbar">
      <div className="site-logo">
        <h1>I Can Help</h1>
      </div>

      <div className="nav" style={{ margin: 0 }}>
        <div
          className="navcontent"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <a href="#">About</a>
          <a href="#">Find Work</a>
          <a href="#">Find Talent</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            className="Searchbtn"
            icon={<SearchOutlined />}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            Search here
          </Button>
        </div>
      </div>

      <div className="btn">
        <Tooltip title="search">
          <Button
            className="btn1"
            type="button"
            shape="circle"
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Tooltip title="search">
          <Button
            className="btn2"
            type="button"
            shape="circle"
            icon={<DownOutlined className="arrow" />}
          />
        </Tooltip>
      </div>
    </div>
  </Navbar>
);

export default NavbarSection;
