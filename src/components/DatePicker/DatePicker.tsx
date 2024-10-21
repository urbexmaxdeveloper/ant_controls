import React, { useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import moment from "moment";
import "moment/locale/ru";
import ruRU from "antd/lib/locale/ru_RU";

const DatePickerComponent: React.FC = () => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  const handleChange = (date: moment.Moment | null) => {
    setDate(date);
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div style={{ marginBottom: "16px" }}>
        <DatePicker onChange={handleChange} placeholder="Выберите дату" />
        <p>
          Вы выбрали дату: {date ? date.format("YYYY-MM-DD") : "не выбрана"}
        </p>
      </div>
    </ConfigProvider>
  );
};

export default DatePickerComponent;
