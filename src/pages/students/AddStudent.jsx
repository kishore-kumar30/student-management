import React from 'react'
import StudentForm from '../../components/student/StudentForm'

const AddStudent = () => {
  return (
     <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Add Student
        </h1>

        <p className="text-gray-500">
          Register a new student into the system.
        </p>
      </div>

      <StudentForm mode="add" />

    </div>
  )
}

export default AddStudent