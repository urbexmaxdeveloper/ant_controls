import React, { useState } from "react";
import { Slider, Input, Row, Col } from "antd";
import { SketchPicker } from "react-color";
const ColorGradient: React.FC = () => {
  const [color1, setColor1] = useState<string>("#ff0000"); // Начальный цвет 1
  const [color2, setColor2] = useState<string>("#0000ff"); // Начальный цвет 2

  const handleColorChange1 = (color: any) => {
    setColor1(color.hex);
  };

  const handleColorChange2 = (color: any) => {
    setColor2(color.hex);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <h3>Цвет 1:</h3>
          <SketchPicker color={color1} onChangeComplete={handleColorChange1} />
        </Col>
        <Col span={12}>
          <h3>Цвет 2:</h3>
          <SketchPicker color={color2} onChangeComplete={handleColorChange2} />
        </Col>
      </Row>

      {/* Отображаем градиент */}
      <div
        style={{
          height: "100px",
          border: "1px solid #ccc",
          background: `linear-gradient(to right, ${color1}, ${color2})`,
          marginTop: "16px",
        }}
      />
    </div>
  );
};

export default ColorGradient;
