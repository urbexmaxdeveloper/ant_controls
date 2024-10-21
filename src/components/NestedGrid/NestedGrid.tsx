import React from "react";
import { Table } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}
const data: DataType[] = [
  {
    key: "1",
    name: "John Doe",
    age: 32,
    address: "10 Downing Street",
    children: [
      {
        key: "1-1",
        name: "John Doe Jr.",
        age: 5,
        address: "10 Downing Street, Apt 1",
      },
      {
        key: "1-2",
        name: "Jane Doe",
        age: 8,
        address: "10 Downing Street, Apt 2",
      },
    ],
  },
  {
    key: "2",
    name: "Jane Smith",
    age: 45,
    address: "20 Main Street",
    children: [
      {
        key: "2-1",
        name: "Jake Smith",
        age: 15,
        address: "20 Main Street, Apt 1",
      },
    ],
  },
];

const NestedGrid: React.FC = () => {
  // Описание столбцов
  const columns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Возраст",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Адрес",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <Table
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <Table
            columns={columns}
            dataSource={record.children}
            pagination={false}
          />
        ),
      }}
      dataSource={data}
    />
  );
};

export default NestedGrid;
