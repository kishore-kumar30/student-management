import express from "express";
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

// Create a new student
router.post("/", createStudent);

// Get all students
router.get("/", getStudents);

// view Student by ID
router.get("/:studentId", getStudentById);

// Update a student by ID
router.put("/:studentId", updateStudent);

// Delete a student by ID
router.delete("/:studentId", deleteStudent);

export default router;

