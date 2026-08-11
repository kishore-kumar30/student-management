import React from "react";
import { FaSearch } from "react-icons/fa";

const StudentFilters = ({
  searchTerm,
  setSearchTerm,
  departmentFilter,
  setDepartmentFilter,
  yearFilter,
  setYearFilter,
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex flex-col lg:flex-row gap-4">
      <div className="relative flex-1">
        <FaSearch className="absolute top-4 left-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search by name or roll no..."
          className="w-full border rounded-lg pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className="border rounded-lg px-4 py-3"
        value={departmentFilter}
        onChange={(e) => setDepartmentFilter(e.target.value)}
        options={[
          "All Departments",
          "Computer Science",
          "Information Technology",
          "Mechanical",
          "Civil",
          "Electrical",
        ]}
      >
        <option>All Departments</option>
        <option>Computer Science</option>
        <option>Information Technology</option>
        <option>Mechanical</option>
        <option>Civil</option>
        <option>Electronics</option>
      </select>

      <select
        className="border rounded-lg px-4 py-3"
        value={yearFilter}
        onChange={(e) => setYearFilter(e.target.value)}
        options={["All Years", "1", "2", "3", "4"]}
      >
        <option>All Years</option>
        <option value="1">1st Year</option>
        <option value="2">2nd Year</option>
        <option value="3">3rd Year</option>
        <option value="4">4th Year</option>
      </select>
    </div>
  );
};

export default StudentFilters;
