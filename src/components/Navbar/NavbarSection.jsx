import React from "react";
// import { Button } from "antd";
import { Navbar } from "./Navbar.styled";
import { Button, Tooltip } from "antd";
import { Input, Space } from "antd";
import { SearchOutlined, DownOutlined, UserOutlined } from "@ant-design/icons";
import SignedinNavbar from "./SignedinNavbar";
import SignedoutNavbar from "./SignedoutNavbar";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const user=true
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
          {/* <Button
            className="Searchbtn"
            type="input"
            icon={<SearchOutlined />}
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            Search here
          </Button> */}

          <Input
            className="Searchbtn"
            size="large"
            placeholder="Search here"
            suffix={<SearchOutlined />}
          />
        </div>
      </div>
      {!user?<SignedoutNavbar/>:<SignedinNavbar />}
    </div>
  </Navbar>
);

export default NavbarSection;
