import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const ContextMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Вы выбрали пункт:", e.key);
    setVisible(false);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Пункт 1</Menu.Item>
      <Menu.Item key="2">Пункт 2</Menu.Item>
      <Menu.Item key="3">Пункт 3</Menu.Item>
    </Menu>
  );

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(true);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      style={{
        width: "100%",
        height: "200px",
        background: "#f0f0f0",
        padding: "16px",
      }}
    >
      <p>Кликните правой кнопкой мыши, чтобы открыть контекстное меню</p>
      {visible && (
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          visible={visible}
          onVisibleChange={setVisible}
        >
          <Button>
            Контекстное меню <DownOutlined />
          </Button>
        </Dropdown>
      )}
    </div>
  );
};

export default ContextMenu;
