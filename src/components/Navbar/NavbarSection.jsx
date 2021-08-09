import React, { useContext } from "react";
import { Input } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { Navbar } from "./Navbar.styled";
import SignedinNavbar from "./SignedinNavbar";
import SignedoutNavbar from "./SignedoutNavbar";
import AuthContext from "../../Utilities/Contexts/AuthContext";

const NavbarSection = ({ transparent, auth }) => {
  const user = useContext(AuthContext).currentUser;
  const router = useRouter();
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
              <Link href="/about">About</Link>
              <a
                onClick={() =>
                  router.push({ pathname: "/search", query: { type: 1 } })
                }
              >
                Find Work
              </a>
              <a
                onClick={() =>
                  router.push({ pathname: "/search", query: { type: 2 } })
                }
              >
                Find Talent
              </a>
            </div>
          )}

          <Input
            className="Searchbtn"
            size="large"
            placeholder="Search here"
            suffix={<SearchOutlined />}
            onPressEnter={(e) => {
              if (!e.target.value) router.push("/search");
              router.push({
                pathname: "/search",
                query: { q: e.target.value },
              });
            }}
          />
        </div>

        {!user ? <SignedoutNavbar auth={auth} /> : <SignedinNavbar />}
      </div>
    </Navbar>
  );
};

export default NavbarSection;
