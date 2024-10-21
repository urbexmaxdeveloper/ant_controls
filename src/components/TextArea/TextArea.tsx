import React, { useState } from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <TextArea
        rows={4}
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
};

export default TextAreaComponent;
