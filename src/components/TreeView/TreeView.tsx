import React, { useState } from "react";
import { Tree } from "antd";
import type { TreeDataNode, TreeProps } from "antd";

const treeData: TreeDataNode[] = [
  {
    title: "Отдел 1",
    key: "0-0",
    children: [
      {
        title: "Подотдел 1.1",
        key: "0-0-0",
        children: [
          { title: "Сотрудник 1.1.1", key: "0-0-0-0" },
          { title: "Сотрудник 1.1.2", key: "0-0-0-1" },
          { title: "Сотрудник 1.1.3", key: "0-0-0-2" },
        ],
      },
      {
        title: "Подотдел 1.2",
        key: "0-0-1",
        children: [
          { title: "Сотрудник 1.2.1", key: "0-0-1-0" },
          { title: "Сотрудник 1.2.2", key: "0-0-1-1" },
          { title: "Сотрудник 1.2.3", key: "0-0-1-2" },
        ],
      },
      {
        title: "Подотдел 1.3",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "Отдел 2",
    key: "0-1",
    children: [
      { title: "Сотрудник 2.1", key: "0-1-0-0" },
      { title: "Сотрудник 2.2", key: "0-1-0-1" },
      { title: "Сотрудник 2.3", key: "0-1-0-2" },
    ],
  },
  {
    title: "Отдел 3",
    key: "0-2",
  },
];

const TreeView: React.FC = () => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([
    "0-0-0",
    "0-0-1",
  ]);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand: TreeProps["onExpand"] = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue);
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck: TreeProps["onCheck"] = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };

  const onSelect: TreeProps["onSelect"] = (selectedKeysValue, info) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
      treeData={treeData}
    />
  );
};

export default TreeView;
