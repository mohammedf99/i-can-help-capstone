import React from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const LanguageDropdown = () => {
  const { t } = useTranslation("footer");
  const router = useRouter();

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {}

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link href={(router.pathname, router.query)} locale="en">
          English
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href={(router.pathname, router.query)} locale="tr">
          Turkish
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button>
        {t("lang")} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default LanguageDropdown;
