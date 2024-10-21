import React, { useState } from "react";
import { DatePicker, ConfigProvider } from "antd";
import ruRU from "antd/lib/locale/ru_RU";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

const DateRangePickerComponent: React.FC = () => {
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null] | null>(null);

  const handleChange = (
    dates: [Dayjs | null, Dayjs | null] | null,
    dateStrings: [string, string]
  ) => {
    setDates(dates);
  };

  return (
    <ConfigProvider locale={ruRU}>
      <div style={{ marginBottom: "16px" }}>
        <RangePicker
          onChange={handleChange}
          placeholder={["Начальная дата", "Конечная дата"]}
        />
        <p>
          Вы выбрали:{" "}
          {dates && dates[0] && dates[1]
            ? `${dates[0].format("DD.MM.YYYY")} - ${dates[1].format(
                "DD.MM.YYYY"
              )}`
            : "не выбрано"}
        </p>
      </div>
    </ConfigProvider>
  );
};

export default DateRangePickerComponent;
