import React, { useState } from "react";
import { Popover, Button } from "antd";
import { SketchPicker } from "react-color";

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>("#1890ff");
  const [visible, setVisible] = useState<boolean>(false);

  const handleColorChange = (color: any) => {
    setColor(color.hex);
  };

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Popover
      content={
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      }
      trigger="click"
      visible={visible}
      onVisibleChange={toggleVisible}
    >
      <Button style={{ backgroundColor: color, color: "#fff" }}>
        Выбрать цвет
      </Button>
    </Popover>
  );
};

export default ColorPicker;
