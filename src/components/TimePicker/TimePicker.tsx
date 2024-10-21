import React, { useState } from "react";
import { TimePicker, ConfigProvider } from "antd";
import dayjs, { Dayjs } from "dayjs";
import ruRU from "antd/lib/locale/ru_RU";

const TimePickerComponent: React.FC = () => {
  const [time, setTime] = useState<Dayjs | null>(null);

  const handleChange = (time: Dayjs | null, timeString: string | string[]) => {
    setTime(time);
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div style={{ marginBottom: "16px" }}>
        <TimePicker
          onChange={handleChange}
          placeholder="Выберите время"
          format="HH:mm"
        />
        <p>Вы выбрали: {time ? time.format("HH:mm") : "не выбрано"}</p>
      </div>
    </ConfigProvider>
  );
};

export default TimePickerComponent;
