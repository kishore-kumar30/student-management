import React, { useEffect, useState } from "react";
import StudentHeader from "../../components/student/StudentHeader";
import StudentFilters from "../../components/student/StudentFilters";
import StudentTable from "../../components/student/StudentTable";
import { getStudents } from "../../services/studentService";
import Pagination from "../../components/common/Pagination";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchStudents = async () => {
    try {
      const response = await getStudents(currentPage, 5);
      setStudents(response.data);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const filteredStudents = students?.filter((student) => {
    const matchesSearch =
      student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      departmentFilter == "" ||
      departmentFilter === "All Departments" ||
      student.department === departmentFilter;
    const matchesYear =
      yearFilter == "" ||
      yearFilter === "All Years" ||
      String(student.year) === String(yearFilter);

    return matchesSearch && matchesDepartment && matchesYear;
  });

  useEffect(() => {
    fetchStudents();
  }, [currentPage]);

  return (
    <div className="space-y-6">
      <StudentHeader />

      {students?.length > 0 ? (
        <>
          <StudentFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            departmentFilter={departmentFilter}
            setDepartmentFilter={setDepartmentFilter}
            yearFilter={yearFilter}
            setYearFilter={setYearFilter}
          />

          <StudentTable
            students={filteredStudents}
            fetchStudents={fetchStudents}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
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
