import React from 'react';
import {
  FaUserPlus,
  FaClipboardCheck,
  FaBook,
  FaFileAlt,
} from "react-icons/fa";

const QuickActions = () => {

    const actions = [
    {
      title: "Add Student",
      icon: <FaUserPlus />,
    },
    {
      title: "Mark Attendance",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Add Course",
      icon: <FaBook />,
    },
    {
      title: "Generate Report",
      icon: <FaFileAlt />,
    },
  ];
  

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-5">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-5">
        {actions.map((action) => (
          <button
            key={action.title}
            className="flex flex-col  cursor-pointer items-center justify-center gap-2 border rounded-lg p-5 hover:bg-cyan-50 hover:border-cyan-500 transition"
          >
            <div className="text-3xl text-cyan-600">
              {action.icon}
            </div>

            <span className="font-medium">
              {action.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions