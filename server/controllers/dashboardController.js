import student from "../models/student.js";

export const getDashboardStats = async (req, res) => {
  try {

    const totalStudents = await student.countDocuments();
    const activeStudents = await student.countDocuments({
      status: "Active",
    });

    const totalDepartments = await student.distinct("department");

    const recentStudents = await student
      .find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      totalStudents,
      activeStudents,
      totalDepartments: totalDepartments.length,
      recentStudents,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
