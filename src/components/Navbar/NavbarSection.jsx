import React, { useContext, useEffect } from "react";
import { Input } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { Navbar } from "./Navbar.styled";
import SignedinNavbar from "./SignedinNavbar";
import SignedoutNavbar from "./SignedoutNavbar";
import { AuthContext } from "../../Utilities/auth/Auth";

const NavbarSection = ({ transparent, auth }) => {
  const user = useContext(AuthContext).userData;

  const Links = () => {
    if (!user)
      return (
        <div className="navcontent">
          <Link href="/">About</Link>
          <Link href="/">Find Work</Link>
          <Link href="/">Find Talent</Link>
        </div>
      );

    return (
      <div className="navcontent">
        <Link href="/home">Post </Link>
        <Link href="/">My Posts</Link>
        <Link href="/">Pinned Posts</Link>
      </div>
    );
  };

  return (
    <Navbar>
      <div
        className="Navbar"
        style={
          transparent && { backgroundColor: "transparent", boxShadow: "none" }
        }
      >
        <div className="site-logo">
          <h1>I Can Help</h1>
        </div>

        <div className="nav" style={{ margin: 0 }}>
          <Links />

          <Input
            className="Searchbtn"
            size="large"
            placeholder="Search here"
            suffix={<SearchOutlined />}
          />
        </div>

        {!user ? <SignedoutNavbar auth={auth} /> : <SignedinNavbar />}
      </div>
    </Navbar>
  );
};

export default NavbarSection;
