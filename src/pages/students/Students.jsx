import React from 'react'
import StudentHeader from "../../components/student/StudentHeader";
import StudentFilters from "../../components/student/StudentFilters";
import StudentTable from "../../components/student/StudentTable";
import Pagination from "../../components/student/Pagination";

import { students } from "../../data/students";
const Students = () => {
   return (
    <div className="space-y-6">

      <StudentHeader />

      <StudentFilters />

      <StudentTable students={students} />

      <Pagination />

    </div>
  );
}

export default Students