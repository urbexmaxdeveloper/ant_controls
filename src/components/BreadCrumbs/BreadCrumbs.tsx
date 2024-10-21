import React from "react";
import { Breadcrumb } from "antd";

const CustomBreadcrumb: React.FC = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Главная</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Контролы</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Пример</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Текущая страница</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
