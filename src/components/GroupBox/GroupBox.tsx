import React from "react";
import { Card } from "antd";

interface GroupBoxProps {
  title: string;
  children: React.ReactNode;
}

const GroupBox: React.FC<GroupBoxProps> = ({ title, children }) => {
  return (
    <Card title={title} bordered={true} style={{ marginBottom: "16px" }}>
      {children}
    </Card>
  );
};

export default GroupBox;
