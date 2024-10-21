import React, { useState } from "react";
import { Select } from "antd";

const { Option } = Select;

const AutoCompleteComboBox: React.FC = () => {
  const [options] = useState<string[]>([
    "Опция 1",
    "Опция 2",
    "Опция 3",
    "Опция 4",
    "Опция 5",
  ]);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const handleSearch = (value: string) => {
    const newOptions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(newOptions);
  };

  const handleChange = (value: string) => {
    console.log("Выбрано:", value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Select
        placeholder="Выберите опцию" // Плейсхолдер на русском
        onChange={handleChange}
        onSearch={handleSearch} // Вызываем функцию фильтрации при поиске
        showSearch
        style={{ width: 300 }} // Ширина комбобокса
        filterOption={false} // Отключаем стандартную фильтрацию
      >
        {filteredOptions.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default AutoCompleteComboBox;
