import React, { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee } from "../Services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

const UpdateEmployeeForm = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    eaddress: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await getEmployeeById(id);
      setEmployee(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      navigate("/");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="container mt-4 form-container">
      <h1 className="text-center">Update Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="ename"
            value={employee.ename}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            name="eage"
            value={employee.eage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="eaddress"
            value={employee.eaddress}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployeeForm;
