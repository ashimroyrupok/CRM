import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const YearlyReport = () => {
  const data = [
    {
      name: "Jan",
      total_income: 4000,
      total_outCome: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      total_income: 3000,
      total_outCome: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      total_income: 2000,
      total_outCome: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      total_income: 2780,
      total_outCome: 3908,
      amt: 2000,
    },
    {
      name: "May",
      total_income: 1890,
      total_outCome: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      total_income: 2390,
      total_outCome: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      total_income: 3490,
      total_outCome: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      total_income: 590,
      total_outCome: 4700,
      amt: 2100,
    },
    {
      name: "Sep",
      total_income: 3490,
      total_outCome: 2300,
      amt: 2100,
    },
    {
      name: "Oct",
      total_income: 5490,
      total_outCome: 2300,
      amt: 2100,
    },
    {
      name: "Nov",
      total_income: 8690,
      total_outCome: 2300,
      amt: 2100,
    },
    {
      name: "Dec",
      total_income: 8490,
      total_outCome: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="w-full  border  bg-[#E8F1F3]">
        <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
          This Year Earnings and Expenses
        </h2>
      </div>
      <div className="w-full h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="total_outCome"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="total_income"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default YearlyReport;
