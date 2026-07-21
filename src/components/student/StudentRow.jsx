import React from 'react'
import StudentStatus from './StudentStatus';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';

const StudentRow = ({student}) => {
   return (
    <tr className="border-b hover:bg-gray-50 transition">

      <td className="p-4">
        <img
          src={student.photo}
          alt={student.name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </td>

      <td>{student.rollNo}</td>

      <td>{student.name}</td>

      <td>{student.department}</td>

      <td>{student.year}</td>

      <td>
        <StudentStatus status={student.status} />
      </td>

      <td>
        <div className="flex gap-4 text-lg">

          <button className="text-blue-600 hover:text-blue-800">
            <FaEye />
          </button>

          <button className="text-green-600 hover:text-green-800">
            <FaEdit />
          </button>

          <button className="text-red-600 hover:text-red-800">
            <FaTrash />
          </button>

        </div>
      </td>

    </tr>
  );
}

export default StudentRow