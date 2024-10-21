import React, { useState } from "react";
import { AutoComplete } from "antd";

const AutoCompleteInput: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const handleSearch = (searchText: string) => {
    const filteredOptions = [
      "Москва",
      "Санкт-Петербург",
      "Новосибирск",
      "Екатеринбург",
      "Казань",
    ]
      .filter((city) => city.toLowerCase().includes(searchText.toLowerCase()))
      .map((city) => ({ value: city }));

    setOptions(filteredOptions);
  };

  const handleSelect = (value: string) => {
    console.log("Выбрано:", value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <AutoComplete
        options={options}
        onSearch={handleSearch}
        onSelect={handleSelect}
        placeholder="Начните вводить название города"
        style={{ width: 300 }}
      />
    </div>
  );
};

export default AutoCompleteInput;
