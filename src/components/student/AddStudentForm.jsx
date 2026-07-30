import React, { useState } from "react";
import ProfileUpload from "./ProfileUpload";
import FormButtons from "./FormButtons";
import FormSection from "./FormSection";
import Input from "../common/Input";
import Select from "../common/Select";
import Textarea from "../common/TextArea";
import { createStudent } from "../../services/studentService";

const AddStudentForm = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    rollNumber: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    department: "",
    course: "",
    year: "",
    semester: "",
    fatherName: "",
    motherName: "",
    parentPhone: "",
    parentEmail: "",
    admissionNumber: "",
    admissionDate: "",
    previousSchool: "",
    cgpa: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await createStudent(formData);
      alert("Student created successfully!");
    } catch (error) {
      console.error("Error creating student:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <ProfileUpload
        profileImage={profileImage}
        setProfileImage={setProfileImage}
      />

      <FormSection title="Student Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <Input
            label="Roll Number"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={["Male", "Female", "Other"]}
          />

          <Input
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <Select
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            options={[
              "Computer Science",
              "Information Technology",
              "Mechanical",
              "Civil",
              "Electrical",
            ]}
          />

          <Input
            label="Course"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />

          <Select
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            options={["1", "2", "3", "4"]}
          />

          <Select
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            options={["1", "2", "3", "4", "5", "6", "7", "8"]}
          />
        </div>
      </FormSection>

      <FormSection title="Parent Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Father Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />

          <Input
            label="Mother Name"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />

          <Input
            label="Parent Phone"
            type="tel"
            name="parentPhone"
            value={formData.parentPhone}
            onChange={handleChange}
            required
          />

          <Input
            label="Parent Email"
            type="email"
            name="parentEmail"
            value={formData.parentEmail}
            onChange={handleChange}
          />
        </div>
      </FormSection>

      <FormSection title="Academic Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input
            label="Admission Number"
            name="admissionNumber"
            value={formData.admissionNumber}
            onChange={handleChange}
            required
          />

          <Input
            label="Admission Date"
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleChange}
            required
          />

          <Input
            label="Previous School"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
          />

          <Input
            label="CGPA"
            type="number"
            name="cgpa"
            placeholder="Enter CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </div>
      </FormSection>

      <FormSection title="Address">
        {" "}
        <Textarea
          label=""
          name="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
          rows={5}
        />
      </FormSection>
      <FormButtons />
    </form>
  );
};

export default AddStudentForm;
