import student from "../models/student.js";

export const createStudent = async (req, res) => {
  try {
    const newStudent = await student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: newStudent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudents = async (req, res) => {
    try {
        const students = await student.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            message: "Students retrieved successfully",
            data: students
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
