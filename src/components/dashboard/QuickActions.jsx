import React from "react";
import {
  FaUserPlus,
  FaClipboardCheck,
  FaBook,
  FaFileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      title: "Add Student",
      icon: <FaUserPlus />,
      path: "/students/add",
    },
    {
      title: "Add Course",
      icon: <FaBook />,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5 text-cyan-700">Quick Actions</h2>

      <div className="flex gap-5">
        {actions?.map((action) => (
          <Link
            to={action.path}
            key={action.title}
            className="flex  cursor-pointer items-center justify-center gap-5 border-2 border-cyan-500 rounded-lg p-5 hover:bg-cyan-500 hover:text-white transition"
          >
            <div className="text-3xl">{action.icon}</div>

            <span className="font-medium">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
