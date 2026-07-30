import React, { useEffect, useState } from "react";
import StudentHeader from "../../components/student/StudentHeader";
import StudentFilters from "../../components/student/StudentFilters";
import StudentTable from "../../components/student/StudentTable";
import Pagination from "../../components/student/Pagination";
import { getStudents } from "../../services/studentService";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await getStudents();
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="space-y-6">
      <StudentHeader />

      <StudentFilters />

      <StudentTable students={students} />

      <Pagination />
    </div>
  );
};

export default Students;
