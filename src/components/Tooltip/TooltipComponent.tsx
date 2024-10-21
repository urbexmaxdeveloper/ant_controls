import React from "react";
import { Tooltip, Button } from "antd";

interface TooltipComponentProps {
  title: string;
  children: React.ReactNode;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  title,
  children,
}) => {
  return (
    <Tooltip title={title} placement="top">
      {children}
    </Tooltip>
  );
};

export default TooltipComponent;
