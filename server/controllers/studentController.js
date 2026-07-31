import student from "../models/student.js";

export const createStudent = async (req, res) => {
  try {
    const studentData = {
      ...req.body,
    };
    if (req.file) {
      studentData.profileImage = `/uploads/${req.file.filename}`;
    }
    const newStudent = await student.create(studentData);

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: newStudent,
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
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentData = await student.findById(studentId);

    if (!studentData) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: studentData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const studentData = {
      ...req.body,
    };

    if (req.file) {
      studentData.profileImage = `/uploads/${req.file.filename}`;
    }
    const { studentId } = req.params;
    const updatedStudent = await student.findByIdAndUpdate(
      studentId,
      studentData,
      { new: true, runValidators: true },
    );

    if (!updatedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      data: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
