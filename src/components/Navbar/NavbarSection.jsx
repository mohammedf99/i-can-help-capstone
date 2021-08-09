import React, { useContext } from "react";
import { useTranslation } from "next-i18next";
import { Input } from "antd";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { Navbar } from "./Navbar.styled";
import SignedinNavbar from "./SignedinNavbar";
import SignedoutNavbar from "./SignedoutNavbar";
import AuthContext from "../../Utilities/Contexts/AuthContext";

const NavbarSection = ({ transparent, auth }) => {
  const user = useContext(AuthContext).currentUser;
  const { t } = useTranslation("navbar");

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
              <Link href="/home">{t("post")}</Link>
              <Link href="/myPosts">{t("myPosts")}</Link>
              <Link href="/pinnedPosts">{t("pinnedPost")}</Link>
            </div>
          )}

          {!user && (
            <div className="navcontent">
              <Link href="/">{t("about")}</Link>
              <Link href="/search">{t("findWork")}</Link>
              <Link href="/search">{t("findTalent")}</Link>
            </div>
          )}

          <Input
            className="Searchbtn"
            size="large"
            placeholder={t("searchHere")}
            suffix={<SearchOutlined />}
          />
        </div>

        {!user ? <SignedoutNavbar auth={auth} /> : <SignedinNavbar />}
      </div>
    </Navbar>
  );
};

export default NavbarSection;
