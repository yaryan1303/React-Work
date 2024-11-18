import axios from "axios";

const API_URL = "http://localhost:9999/employee"; // Update to match your Spring Boot server

export const getEmployees = () => axios.get(`${API_URL}/showEmpl`);
export const getEmployeeById = (id) => axios.get(`${API_URL}/showEmpl/${id}`);
export const saveEmployee = (employee) =>
  axios.post(`${API_URL}/save`, employee);
export const updateEmployee = (id, employee) =>
  axios.put(`${API_URL}/update/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/delete/${id}`);
