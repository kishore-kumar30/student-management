import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../services/studentService";
import avatar from "../../assets/avatar.png";
import { API_URL } from "../../../server/config/api";

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

  const studentFields = [
    { label: "Roll Number", value: student.rollNumber },
    { label: "Department", value: student.department },
    { label: "Course", value: student.course },
    { label: "Year", value: student.year },
    { label: "Semester", value: student.semester },
    { label: "Address", value: student.address },
    { label: "CGPA", value: student.cgpa },
    { label: "Phone", value: student.phone },
    { label: "Gender", value: student.gender },
    {
      label: "Date of Birth",
      value: new Date(student.dob).toLocaleDateString(),
    },
    { label: "Admission Number", value: student.admissionNumber },
    {
      label: "Admission Date",
      value: new Date(student.admissionDate).toLocaleDateString(),
    },
    { label: "Father's Name", value: student.fatherName },
    { label: "Mother's Name", value: student.motherName },
    { label: "Parent Phone", value: student.parentPhone },
    { label: "Parent Email", value: student.parentEmail },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center gap-10 mb-4">
        {student.profileImage ? (
          <img
            src={`${API_URL}${student.profileImage}`}
            alt="Avatar"
            className="w-30 h-30 rounded-full object-center"
          />
        ) : (
          <img
            src={avatar}
            alt="Avatar"
            className="w-30 h-30 rounded-full object-center"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold">{student.fullName}</h2>
          <p>Email: {student.email}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8">
        {studentFields.map((field, idx) => (
          <p key={idx}>
            <span className="font-bold text-gray-700">{field.label}: </span>
            <span className="text-gray-500">{field.value ?? "N/A"}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default StudentProfile;
