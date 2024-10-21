import React, { useState } from "react";
import { Input } from "antd";

const InputTextBox: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Input
        placeholder="Введите текст"
        value={value}
        onChange={handleChange}
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
};

export default InputTextBox;
