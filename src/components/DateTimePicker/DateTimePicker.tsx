import React, { useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import ruRU from "antd/lib/locale/ru_RU";

const DateTimePickerComponent: React.FC = () => {
  const [dateTime, setDateTime] = useState<moment.Moment | null>(null);

  const handleChange = (date: moment.Moment | null) => {
    setDateTime(date);
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div style={{ marginBottom: "16px" }}>
        <DatePicker
          onChange={handleChange}
          showTime
          placeholder="Выберите дату и время" // Плейсхолдер на русском
        />
        <p>
          Вы выбрали:{" "}
          {dateTime ? dateTime.format("YYYY-MM-DD HH:mm:ss") : "не выбрано"}
        </p>
      </div>
    </ConfigProvider>
  );
};

export default DateTimePickerComponent;
