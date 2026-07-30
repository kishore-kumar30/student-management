import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    profileImage: {
      type: String,
      default: "",
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    rollNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    dob: {
      type: Date,
    },

    department: {
      type: String,
      required: true,
    },

    course: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },

    semester: {
      type: Number,
      required: true,
    },

    fatherName: String,
    motherName: String,
    parentPhone: String,
    parentEmail: String,

    admissionNumber: String,

    admissionDate: Date,

    previousSchool: String,

    cgpa: Number,

    address: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Student", studentSchema);