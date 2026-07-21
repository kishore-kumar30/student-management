import React from 'react'
import { FaSearch } from 'react-icons/fa';

const StudentFilters = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col lg:flex-row gap-4">

      <div className="relative flex-1">
        <FaSearch className="absolute top-4 left-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search student..."
          className="w-full border rounded-lg pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      <select className="border rounded-lg px-4 py-3">
        <option>All Departments</option>
        <option>Computer Science</option>
        <option>Mechanical</option>
        <option>Civil</option>
        <option>Electronics</option>
      </select>

      <select className="border rounded-lg px-4 py-3">
        <option>All Years</option>
        <option>1st Year</option>
        <option>2nd Year</option>
        <option>3rd Year</option>
        <option>4th Year</option>
      </select>

    </div>
  );
}

export default StudentFilters