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
const WeeklyReport = () => {
     const data = [
       {
         name: "Sat",
         total_income: 4000,
         total_outCome: 2400,
         amt: 2400,
       },
       {
         name: "Sun",
         total_income: 3000,
         total_outCome: 1398,
         amt: 2210,
       },
       {
         name: "Mon",
         total_income: 2000,
         total_outCome: 9800,
         amt: 2290,
       },
       {
         name: "Tue",
         total_income: 2780,
         total_outCome: 3908,
         amt: 2000,
       },
       {
         name: "Wed",
         total_income: 1890,
         total_outCome: 4800,
         amt: 2181,
       },
       {
         name: "Thu",
         total_income: 2390,
         total_outCome: 3800,
         amt: 2500,
       },
       {
         name: "Fri",
         total_income: 3490,
         total_outCome: 4300,
         amt: 2100,
       },
     
     ];
  return (
    <div className="bg-white rounded-md shadow-sm">
      <div className="w-full  border  bg-[#E8F1F3]">
        <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
          Weekly Report
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

export default WeeklyReport;
