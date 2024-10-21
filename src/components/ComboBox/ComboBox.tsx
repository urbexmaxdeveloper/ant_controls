import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ComboBox: React.FC = () => {
  const handleChange = (value: string) => {
    console.log("Выбрано:", value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Select
        placeholder="Выберите опцию"
        onChange={handleChange}
        style={{ width: 300 }}
      >
        <Option value="option1">Опция 1</Option>
        <Option value="option2">Опция 2</Option>
        <Option value="option3">Опция 3</Option>
        <Option value="option4">Опция 4</Option>
      </Select>
    </div>
  );
};

export default ComboBox;
