import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/studentService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../common/Button";

const RecentStudents = ({ studentsData }) => {
  const students = studentsData.recentStudents ?? [];
  const navigate = useNavigate();

  console.log(students);
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-cyan-700">
          Recent Students
        </h1>

        <Button
          variant="primary"
          className="text-cyan-600 hover:underline"
          onClick={() => navigate("/students")}
        >
          View All
        </Button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-y">
            <th className="py-3">Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students?.slice(0, 10)?.map((student) => (
            <tr
              key={student._id}
              className="text-center border-b border-b-gray-300"
            >
              <td>{student.rollNumber}</td>
              <td className="py-3">{student.fullName}</td>
              <td>{student.email}</td>
              <td>{student.course}</td>
              <td>{student.department}</td>

              <td>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    student.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {student.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentStudents;
