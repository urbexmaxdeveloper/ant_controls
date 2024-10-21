// src/components/Buttons/ButtonGroup.tsx
import React from 'react';
import { Button } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

const ButtonGroup: React.FC = () => {
  return (
    <div className="button-group" style={{ marginBottom: '16px' }}>
      {/* Обычная кнопка с текстом */}
      <Button type="primary" style={{ marginRight: '8px' }}>Нажми меня</Button>

      {/* Кнопка с текстом и иконкой */}
      <Button type="primary" icon={<DownloadOutlined />} style={{ marginRight: '8px' }}>
        Скачать
      </Button>

      {/* Кнопка только с иконкой */}
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </div>
  );
};

export default ButtonGroup;
