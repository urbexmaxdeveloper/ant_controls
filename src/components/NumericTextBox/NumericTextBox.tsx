import React, { useState } from "react";
import { InputNumber } from "antd";

interface NumericTextBoxProps {
  placeholder?: string;
}

const NumericTextBox: React.FC<NumericTextBoxProps> = ({ placeholder }) => {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (value: number | null) => {
    setValue(value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <InputNumber
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ width: "100%" }}
        min={0}
        step={1}
      />
      <p>Вы ввели: {value}</p>
    </div>
  );
};

export default NumericTextBox;
