import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const AttendancePieChart = () => {
  const data = [
    { name: "Present", value: 92 },
    { name: "Absent", value: 8 },
  ];

  const COLORS = ["#10B981", "#EF4444"];
  return (
    <div className="bg-white rounded-xl shadow p-6 h-96">
      <h2 className="text-xl font-semibold mb-4">Attendance Distribution</h2>

      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendancePieChart;
