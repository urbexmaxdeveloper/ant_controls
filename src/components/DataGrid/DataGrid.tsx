import React, { useState } from "react";
import { Table, Input, Button, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const initialData: DataType[] = [
  { key: "1", name: "Иван Иванов", age: 32, address: "Улица 1" },
  { key: "2", name: "Петр Петров", age: 42, address: "Улица 2" },
  { key: "3", name: "Сидор Сидоров", age: 25, address: "Улица 3" },
];

const DataGrid: React.FC = () => {
  const [data, setData] = useState<DataType[]>(initialData);
  const [editingKey, setEditingKey] = useState<string>("");
  const [formData, setFormData] = useState<DataType | null>(null);

  const isEditing = (record: DataType) => record.key === editingKey;

  const edit = (record: DataType) => {
    setEditingKey(record.key);
    setFormData(record);
  };

  const cancel = () => {
    setEditingKey("");
    setFormData(null);
  };

  const save = (key: string) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (formData) {
      newData.splice(index, 1, { ...formData, key });
      setData(newData);
      setEditingKey("");
      setFormData(null);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof DataType
  ) => {
    if (formData) {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Имя",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            value={formData?.name}
            onChange={(e) => handleChange(e, "name")}
          />
        ) : (
          record.name
        );
      },
    },
    {
      title: "Возраст",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            type="number"
            value={formData?.age}
            onChange={(e) => handleChange(e, "age")}
          />
        ) : (
          record.age
        );
      },
    },
    {
      title: "Адрес",
      dataIndex: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Input
            value={formData?.address}
            onChange={(e) => handleChange(e, "address")}
          />
        ) : (
          record.address
        );
      },
    },
    {
      title: "Действия",
      dataIndex: "actions",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button onClick={() => save(record.key)}>Сохранить</Button>
            <Popconfirm title="Отменить редактирование?" onConfirm={cancel}>
              <Button>Отменить</Button>
            </Popconfirm>
          </>
        ) : (
          <Button onClick={() => edit(record)}>Редактировать</Button>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      rowKey="key"
    />
  );
};

export default DataGrid;
