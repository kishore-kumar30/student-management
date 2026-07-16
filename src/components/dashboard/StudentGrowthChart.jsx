import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const StudentGrowthChart = () => {
  const data = [
    { month: "Jan", students: 120 },
    { month: "Feb", students: 150 },
    { month: "Mar", students: 180 },
    { month: "Apr", students: 210 },
    { month: "May", students: 240 },
    { month: "Jun", students: 270 },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">Student Growth</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
            stroke="oklch(60.9% 0.126 221.723)"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentGrowthChart;
