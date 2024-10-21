import React, { useState } from "react";
import { TreeSelect } from "antd";

interface TreeNode {
  title: string;
  value: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    title: "Нечто 1",
    value: "0-0",
    children: [
      {
        title: "Что-то 1.1",
        value: "0-0-0",
      },
      {
        title: "Что-то 1.2",
        value: "0-0-1",
        children: [
          {
            title: "Что-то 1.2.1",
            value: "0-0-1-0",
          },
          {
            title: "Что-то 1.2.2",
            value: "0-0-1-1",
          },
        ],
      },
    ],
  },
  {
    title: "Нечто 2",
    value: "0-1",
    children: [
      {
        title: "Что-то 2.1",
        value: "0-1-0",
      },
    ],
  },
];

const DropdownTree: React.FC = () => {
  const [value, setValue] = useState<string | string[] | undefined>(undefined);

  const handleChange = (newValue: string | string[]) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <TreeSelect
        showSearch
        value={value}
        style={{ width: "100%" }}
        treeData={treeData}
        placeholder="Выберите узел"
        treeDefaultExpandAll
        onChange={handleChange}
      />
      <p>Выбранное значение: {value ? value.toString() : "не выбрано"}</p>
    </div>
  );
};

export default DropdownTree;
