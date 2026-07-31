import axios from "axios";

const API = "http://localhost:5000/api/students";

export const createStudent = async (studentData) => {
  const response = await axios.post(API, studentData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const getStudents = async () => {
  const response = await axios.get(API);
  return response.data;
};

export const getStudentById = async (studentId) => {
  const response = await axios.get(`${API}/${studentId}`);
  return response.data;
};

export const updateStudent = async (studentId, updatedData) => {
  const response = await axios.put(`${API}/${studentId}`, updatedData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteStudent = async (studentId) => {
  const response = await axios.delete(`${API}/${studentId}`);
  return response.data;
};
