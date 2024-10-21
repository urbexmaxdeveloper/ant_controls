import React, { useState } from "react";
import { Radio } from "antd";

const RadioButton: React.FC = () => {
  const [value, setValue] = useState<string>("option1");

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value="option1">Опция 1</Radio>
        <Radio value="option2">Опция 2</Radio>
        <Radio value="option3">Опция 3</Radio>
      </Radio.Group>
      <p>Вы выбрали: {value}</p>
    </div>
  );
};

export default RadioButton;
