import React, { useState } from "react";
import { saveEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import style from "./EmployeeForm.module.css";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    ename: "",
    eage: "",
    eaddress: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveEmployee(employee);
      navigate("/");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  return (
    <div className={`container mt-4 ${style.formcontainer}`}>
      <h1 className="text-center">Add Employee</h1>
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
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
