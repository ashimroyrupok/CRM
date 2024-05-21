import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Bangladesh", value: 700 },
  { name: "America", value: 300 },
 
];

const COLORS = ["#009688", "#FF8042", "#0088FE", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TotalLead = () => {
  return (
    <div className="rounded-md border bg-white shadow-md ">
      <div className="w-full  border rounded-md bg-[#E8F1F3]">
        <h2 className="text-xl py-3 px-5 rounded-md font-semibold">
          This Year Earnings and Expenses
        </h2>
      </div>
      <div className="px-4 flex justify-center w-full h-96 items-center  bg-white">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          <Legend/>
          </PieChart>
        </ResponsiveContainer>
        
      </div>
    </div>
  );
};


export default TotalLead;
