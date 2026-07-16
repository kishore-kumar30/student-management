import React from "react";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome Back, Admin 👋
      </h1>

      <p className="text-gray-500 mt-2">{today}</p>
    </div>
  );
};

export default DashboardHeader;
