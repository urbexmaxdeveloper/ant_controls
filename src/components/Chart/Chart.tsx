import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie } from "recharts";
import { Card, Typography } from "antd";

const data = [
  { name: "Янв", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Фев", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Мар", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Апр", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Май", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Июн", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Июл", uv: 3490, pv: 4300, amt: 2100 },
];

const Charts: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      <Card title="Линейный график" style={{ width: "30%", margin: "10px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Столбчатый график" style={{ width: "30%", margin: "10px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Круговая диаграмма" style={{ width: "30%", margin: "10px" }}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="uv"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Charts;
