import React, { PureComponent } from "react";
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

const data = [
  {
    name: "",
    orders: 0,
    profit: 0,
    amt: 0,
  },
  {
    name: "Week 1",
    orders: 4000,
    profit: 2400,
    amt: 2400,
  },
  {
    name: "Week 2",
    orders: 3000,
    profit: 1398,
    amt: 2210,
  },
  {
    name: "Week 3",
    orders: 2000,
    profit: 9800,
    amt: 2290,
  },
  {
    name: "Week 4",
    orders: 2780,
    profit: 3908,
    amt: 2000,
  },
];

export default class Chart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="var(--secondarySoft)" />
          <YAxis stroke="var(--secondarySoft)" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#f3afc6"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="orders" stroke="#89d4eb" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
