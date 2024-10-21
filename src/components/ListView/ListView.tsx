import React, { useState } from "react";
import { List, Typography, Button, Avatar } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface Item {
  id: number;
  name: string;
  messagesCount: number;
  photo: string;
}

const initialData: Item[] = [
  {
    id: 1,
    name: "Контакт 1",
    messagesCount: 5,
    photo: "https://via.placeholder.com/40",
  }, //заглушка
  {
    id: 2,
    name: "Контакт 2",
    messagesCount: 3,
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    name: "Контакт 3",
    messagesCount: 12,
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    name: "Контакт 4",
    messagesCount: 1,
    photo: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    name: "Контакт 5",
    messagesCount: 0,
    photo: "https://via.placeholder.com/40",
  },
];

const ListView: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleSelect = (item: Item) => {
    setSelectedItem(item);
  };

  const handleDelete = (id: number) => {
    console.log(`Удаляем элемент с id: ${id}`);
    // Здесь вы можете добавить логику для удаления элемента
  };

  return (
    <div>
      <List
        bordered
        dataSource={initialData}
        renderItem={(item) => (
          <List.Item
            onClick={() => handleSelect(item)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedItem?.id === item.id ? "#f0f0f0" : "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={item.photo} style={{ marginRight: "8px" }} />
              <Typography.Text>{item.name}</Typography.Text>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography.Text style={{ marginRight: "8px" }}>
                {item.messagesCount} сообщений
              </Typography.Text>
              <Button
                type="link"
                danger
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(item.id);
                }}
              >
                Удалить
              </Button>
            </div>
          </List.Item>
        )}
      />

      {selectedItem && (
        <div style={{ marginTop: "16px" }}>
          <Typography.Title level={4}>
            Детали выбранного элемента:
          </Typography.Title>
          <Typography.Paragraph>Имя: {selectedItem.name}</Typography.Paragraph>
          <Typography.Paragraph>ID: {selectedItem.id}</Typography.Paragraph>
          <Typography.Paragraph>
            Количество сообщений: {selectedItem.messagesCount}
          </Typography.Paragraph>
        </div>
      )}
    </div>
  );
};

export default ListView;
