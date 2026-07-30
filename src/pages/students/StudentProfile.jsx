import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../services/studentService";

const StudentProfile = () => {

  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const fetchStudent = async () => {
    try {
      const response = await getStudentById(id);
      setStudent(response.data);
    } catch (error) {
      console.error("Error fetching student:", error);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  if (!student) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold">{student.fullName}</h2>

      <p>Email: {student.email}</p>

      <p>Roll Number: {student.rollNumber}</p>

      <p>Department: {student.department}</p>

      <p>Course: {student.course}</p>

      <p>Year: {student.year}</p>

      <p>Semester: {student.semester}</p>
    </div>
  );
};

export default StudentProfile;
