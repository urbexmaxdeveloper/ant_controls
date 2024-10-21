import React from "react";
import { Button, notification, Space } from "antd";

type NotificationType = "success" | "info" | "warning" | "error";

const NotificationComponent: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "Заголовок уведомления",
      description:
        "Это содержимое уведомления. Это содержимое уведомления. Это содержимое уведомления.",
      placement: "bottomRight",
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon("success")}>
          Успех
        </Button>
        <Button onClick={() => openNotificationWithIcon("info")}>
          Информация
        </Button>
        <Button onClick={() => openNotificationWithIcon("warning")}>
          Предупреждение
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>
          Ошибка
        </Button>
      </Space>
    </>
  );
};

export default NotificationComponent;
