import React, { useEffect, useState } from "react";
import StudentHeader from "../../components/student/StudentHeader";
import StudentFilters from "../../components/student/StudentFilters";
import StudentTable from "../../components/student/StudentTable";
import Pagination from "../../components/student/Pagination";
import { getStudents } from "../../services/studentService";

const Students = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="space-y-6">
      <StudentHeader />

      {students.length > 0 ? (
        <>
          <StudentFilters />

          <StudentTable students={students} fetchStudents={fetchStudents} />

          <Pagination />
        </>
      ) : (
        <div>
          <h1 className="text-xl font-bold text-center text-gray-800">
            No record found.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Students;
