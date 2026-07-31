import React, { useEffect, useState } from "react";
import { getStudents } from "../../services/studentService";
import { Link } from "react-router-dom";

const RecentStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Students</h2>

        <Link to="/students" className="text-cyan-600 hover:underline">
          View All
        </Link>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.slice(0, 3).map((student) => (
            <tr key={student.id} className="border-b">
              <td className="py-3">{student.rollNumber}</td>
              <td>{student.fullName}</td>
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
