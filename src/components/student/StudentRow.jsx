import React from "react";
import StudentStatus from "./StudentStatus";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../../services/studentService";

const StudentRow = ({ student, fetchStudents }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${student.fullName}?`,
    );

    if (!confirmed) return;

    try {
      await deleteStudent(student._id);

      alert("Student deleted successfully!");

      fetchStudents();
    } catch (error) {
      console.error(error);

      alert("Failed to delete student.");
    }
  };
  const navigate = useNavigate();
  
  return (
    <tr className="border-b hover:bg-gray-50 transition">
      <td className="p-4">
        {student.profileImage ? (
          <img
            src={`http://localhost:5000${student.profileImage}`}
            alt={student.fullName}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <img
            src={Avatar}
            alt={student.fullName}
            className="w-10 h-10 rounded-full object-cover"
          />
        )}
      </td>

      <td>{student.rollNumber}</td>

      <td>{student.fullName}</td>

      <td>{student.department}</td>

      <td>{student.year}</td>

      <td>
        <StudentStatus status={student.status} />
      </td>

      <td>
        <div className="flex gap-4 text-lg">
          <button
            onClick={() => navigate(`/students/${student._id}`)}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <FaEye />
          </button>

          <button
            onClick={() => navigate(`/students/edit/${student._id}`)}
            className="text-green-600 hover:text-green-800 cursor-pointer"
          >
            <FaEdit />
          </button>

          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 cursor-pointer"
          >
            <FaTrash />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
