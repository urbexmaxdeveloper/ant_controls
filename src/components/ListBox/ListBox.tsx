import React, { useState } from "react";
import { List, Button } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const ListBox: React.FC = () => {
  const [leftList, setLeftList] = useState<string[]>([
    "Элемент 1",
    "Элемент 2",
    "Элемент 3",
    "Элемент 4",
    "Элемент 5",
  ]);

  const [rightList, setRightList] = useState<string[]>([]);

  const moveToRight = (item: string) => {
    setLeftList((prev) => prev.filter((i) => i !== item));
    setRightList((prev) => [...prev, item]);
  };

  const moveToLeft = (item: string) => {
    setRightList((prev) => prev.filter((i) => i !== item));
    setLeftList((prev) => [...prev, item]);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <List
        bordered
        style={{ width: "200px", marginRight: "16px" }}
        dataSource={leftList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                onClick={() => moveToRight(item)}
              />,
            ]}
          >
            {item}
          </List.Item>
        )}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          type="primary"
          icon={<ArrowRightOutlined />}
          onClick={() => {
            if (leftList.length) {
              moveToRight(leftList[0]); // Переместить первый элемент из левого списка
            }
          }}
          style={{ marginBottom: "8px" }}
        >
          Переместить вправо
        </Button>
        <Button
          type="primary"
          icon={<ArrowLeftOutlined />}
          onClick={() => {
            if (rightList.length) {
              moveToLeft(rightList[0]); // Переместить первый элемент из правого списка
            }
          }}
        >
          Переместить влево
        </Button>
      </div>
      <List
        bordered
        style={{ width: "200px", marginLeft: "16px" }}
        dataSource={rightList}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                icon={<ArrowLeftOutlined />}
                onClick={() => moveToLeft(item)}
              />,
            ]}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListBox;
