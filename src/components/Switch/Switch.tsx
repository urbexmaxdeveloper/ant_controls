import React, { useState } from "react";
import { Switch } from "antd";

const SwitchToggle: React.FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <Switch checked={checked} onChange={onChange} />
      <span style={{ marginLeft: "8px" }}>
        {checked ? "Включено" : "Выключено"}
      </span>
    </div>
  );
};

export default SwitchToggle;
