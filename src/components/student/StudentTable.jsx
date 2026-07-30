import React from 'react'
import StudentRow from './StudentRow';

const StudentTable = ({students}) => {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">Photo</th>
            <th className="text-left">Roll No</th>
            <th className="text-left">Name</th>
            <th className="text-left">Department</th>
            <th className="text-left">Year</th>
            <th className="text-left">Status</th>
            <th className="text-left">Actions</th>

          </tr>

        </thead>

        <tbody>

          {students.map(student => (
            <StudentRow
              key={student._id}
              student={student}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable