import React from 'react'

const RecentStudents = () => {

    const students = [
        {
            id: 1,
            rollNo: "2026001",
            name: "Rahul Sharma",
            department: "Computer Science",
            status: "Active",
        },
        {
            id: 2,
            rollNo: "2026002",
            name: "Priya Patel",
            department: "Mechanical",
            status: "Active",
        },
        {
            id: 3,
            rollNo: "2026003",
            name: "Arjun Kumar",
            department: "Civil",
            status: "Inactive",
        },
        {
            id: 4,
            rollNo: "2026004",
            name: "Sneha Reddy",
            department: "Electronics",
            status: "Active",
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                    Recent Students
                </h2>

                <button className="text-cyan-600 hover:underline">
                    View All
                </button>
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b text-left">
                        <th className="py-3">Roll No</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="border-b">
                            <td className="py-3">{student.rollNo}</td>
                            <td>{student.name}</td>
                            <td>{student.department}</td>

                            <td>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm ${student.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {student.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default RecentStudents