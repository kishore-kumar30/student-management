import React from 'react'
import { FaPlus } from 'react-icons/fa';

const StudentHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Students
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all students in your institution.
        </p>
      </div>

      <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 transition">
        <FaPlus />
        Add Student
      </button>
    </div>
  );
}

export default StudentHeader