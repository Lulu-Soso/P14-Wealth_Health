// import React, { useState, useEffect } from 'react'
// import axios from "axios"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
// import employeesData from '../employees.js'
import EmployeeRow from "../components/EmployeeRow.jsx";
import { Link } from "react-router-dom";
import Loader from "../components/Loader.jsx";
import { useGetEmployeesQuery } from "../slices/employeesApiSlice.js";

const EmployeesList = () => {
  // const [employees, setEmployees] = useState([])

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     const { data } = await axios.get("/api/employees");
  //     setEmployees(data)
  //   };
  //   fetchEmployees()
  // }, []);
  // const { data: employees, isLoading, error } = useGetEmployeesQuery();
  const { data: employees, isLoading } = useGetEmployeesQuery();

  return (
    <div className="app-container">
      {isLoading ? (
        // <h2>Loading...</h2>
        <Loader />
      // ) : error ? (
      //   <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h2>Current Employees</h2>

          {employees.map((employee) => (
            <EmployeeRow employee={employee} key={employee._id} />
          ))}
        </>
      )}

      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeesList;
