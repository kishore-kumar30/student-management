import React from "react";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex justify-between">
      <div></div>
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800">Welcome, Admin 👋</h1>
        <p className="text-gray-500 mt-2">{today}</p>
      </div>
    </div>
  );
};

export default DashboardHeader;
