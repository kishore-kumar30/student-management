import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const StudentHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between">
      <div>
        {/* <h1 className="text-3xl font-bold text-gray-800">Students</h1> */}

        <p className="text-gray-500 mt-1">
          Manage all students in your institution.
        </p>
      </div>

      <Link
        to="/students/add"
        className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition cursor-pointer"
      >
        <FaPlus />
        Add Student
      </Link>
    </div>
  );
};

export default StudentHeader;
