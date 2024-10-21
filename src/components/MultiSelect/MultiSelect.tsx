import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const options = [
  { label: "Опция 1", value: "1" },
  { label: "Опция 2", value: "2" },
  { label: "Опция 3", value: "3" },
  { label: "Опция 4", value: "4" },
];

const MultiSelect: React.FC = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Select
        mode="multiple"
        style={{ width: "100%" }}
        placeholder="Выберите несколько опций"
        value={selectedValues}
        onChange={handleChange}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      <p>
        Вы выбрали:{" "}
        {selectedValues.length > 0
          ? selectedValues.join(", ")
          : "ничего не выбрано"}
      </p>
    </div>
  );
};

export default MultiSelect;
