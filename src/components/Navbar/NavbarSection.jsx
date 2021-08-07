import React, { useContext } from "react";
import { Input } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { Navbar } from "./Navbar.styled";
import SignedinNavbar from "./SignedinNavbar";
import SignedoutNavbar from "./SignedoutNavbar";
import AuthContext from "../../Utilities/Contexts/AuthContext";

const NavbarSection = ({ transparent, auth }) => {
  const user = useContext(AuthContext).currentUser;

  return (
    <Navbar>
      <div
        className="Navbar"
        style={
          transparent && { backgroundColor: "transparent", boxShadow: "none" }
        }
      >
        <div className="site-logo">
          <Link href="/">
            <h1>I Can Help</h1>
          </Link>
        </div>

        <div className="nav" style={{ margin: 0 }}>
          {user && (
            <div className="navcontent">
              <Link href="/home">Post </Link>
              <Link href="/myPosts">My Posts</Link>
              <Link href="/pinnedPosts">Pinned Posts</Link>
            </div>
          )}

          {!user && (
            <div className="navcontent">
              <Link href="/">About</Link>
              <Link href="/search">Find Work</Link>
              <Link href="/search">Find Talent</Link>
            </div>
          )}

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
