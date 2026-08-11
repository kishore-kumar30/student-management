import student from "../models/student.js";
import path from "path";
import fs from "fs";

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
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    const skip = (page - 1) * limit;
    const students = await student.find().skip(skip).limit(limit);
    const totalStudents = await student.countDocuments();

    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      data: students,
      currentPage: page,
      totalPages: Math.ceil(totalStudents / limit),
      totalSudents: totalStudents,
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
    const existingStudent = await student.findById(studentId);
    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }
    if (req.file) {
      // Delete the old profile image if it exists
      if (existingStudent.profileImage) {
        const oldImagePath = path.join(
          process.cwd(),
          existingStudent.profileImage,
        );
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.log("Error deleting old profile image:", err);
          }
        });
      }
    }
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
    const existingStudent = await student.findById(studentId);
    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    if (existingStudent.profileImage) {
      const imagePath = path.join(process.cwd(), existingStudent.profileImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
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
