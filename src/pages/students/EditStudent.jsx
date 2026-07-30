import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StudentForm from "../../components/student/StudentForm";
import { getStudentById } from "../../services/studentService";

const EditStudent = () => {

   const { id } = useParams();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, [id]);

  const fetchStudent = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
    <StudentForm
      mode="edit"
      student={student}
    />
    </>
  )
}

export default EditStudent