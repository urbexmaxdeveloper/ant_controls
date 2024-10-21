import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const CustomMenu: React.FC = () => {
  const handleClick = (e: any) => {
    console.log("Clicked menu item: ", e);
  };

  return (
    <Menu onClick={handleClick} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Почта
      </Menu.Item>
      <SubMenu key="app" icon={<AppstoreOutlined />} title="Приложения">
        <Menu.Item key="app1">Приложение 1</Menu.Item>
        <Menu.Item key="app2">Приложение 2</Menu.Item>
        <SubMenu key="subapp" title="Подменю">
          <Menu.Item key="subapp1">Подприложение 1</Menu.Item>
          <Menu.Item key="subapp2">Подприложение 2</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="settings" icon={<SettingOutlined />} title="Настройки">
        <Menu.Item key="setting1">Настройка 1</Menu.Item>
        <Menu.Item key="setting2">Настройка 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default CustomMenu;
