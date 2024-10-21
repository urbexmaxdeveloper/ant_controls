import React from "react";
import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const FileUpload: React.FC = () => {
  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} файл загружен успешно`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} не удалось загрузить файл`);
    }
  };

  return (
    <Upload
      action="apiurl"
      onChange={handleChange}
      showUploadList={{
        showRemoveIcon: true,
      }}
      multiple
    >
      <Button icon={<UploadOutlined />}>Загрузить файлы</Button>
    </Upload>
  );
};

export default FileUpload;
