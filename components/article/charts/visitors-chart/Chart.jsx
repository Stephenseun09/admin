import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 2000,
  },
  {
    name: "Tue",
    uv: 3000,
  },
  {
    name: "Wed",
    uv: 3500,
  },
  {
    name: "Thur",
    uv: 3200,
  },
  {
    name: "Fri",
    uv: 4000,
  },
  {
    name: "Sat",
    uv: 9000,
  },
  {
    name: "Sun",
    uv: 8000,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={400}
          height={200}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="uv"
            fill="var(--secondary)"
            stroke="var(--secondarySoft)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
