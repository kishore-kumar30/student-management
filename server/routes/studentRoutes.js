import express from "express";
import { createStudent, deleteStudent, getStudentById, getStudents, updateStudent } from "../controllers/studentController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Create a new student
router.post("/", upload.single("profileImage"), createStudent);

// Get all students
router.get("/", getStudents);

// view Student by ID
router.get("/:studentId", getStudentById);

// Update a student by ID
router.put("/:studentId", upload.single("profileImage"), updateStudent);

// Delete a student by ID
router.delete("/:studentId", deleteStudent);

export default router;

