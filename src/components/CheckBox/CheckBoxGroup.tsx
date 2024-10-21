import React, { useState } from "react";
import { Checkbox } from "antd";

const CheckBoxGroup: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const options = [
    { label: "Опция 1", value: "1" },
    { label: "Опция 2", value: "2" },
    { label: "Опция 3", value: "3" },
  ];

  const onChange = (checkedValues: any) => {
    setCheckedItems(checkedValues);
  };

  return (
    <Checkbox.Group
      options={options}
      value={checkedItems}
      onChange={onChange}
    />
  );
};

export default CheckBoxGroup;
