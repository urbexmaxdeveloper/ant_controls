import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">Действие 1</Menu.Item>
    <Menu.Item key="2">Действие 2</Menu.Item>
    <Menu.Item key="3">Действие 3</Menu.Item>
  </Menu>
);

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar" style={{ marginBottom: "16px" }}>
      <Space>
        {/* Кнопка для сохранения */}
        <Button type="primary" icon={<SaveOutlined />}>
          Сохранить
        </Button>

        {/* Кнопка для редактирования */}
        <Button type="default" icon={<EditOutlined />}>
          Редактировать
        </Button>

        {/* Кнопка с выпадающим меню */}
        <Dropdown overlay={menu}>
          <Button>
            Дополнительно <DownOutlined />
          </Button>
        </Dropdown>
      </Space>
    </div>
  );
};

export default Toolbar;
