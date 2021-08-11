import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";

const LanguageDropdown = () => {
  const { t } = useTranslation("footer");

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {}

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">English</Menu.Item>
      <Menu.Item key="2">Turkish</Menu.Item>
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
