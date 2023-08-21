import React, { useState, useEffect } from 'react'
import axios from "axios"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
// import employeesData from '../employees.js'
import EmployeeRow from '../components/EmployeeRow.jsx';
import { Link } from 'react-router-dom';

const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
      const fetchEmployees = async () => {
        const { data } = await axios.get("/api/employees");
        setEmployees(data)
      };
      fetchEmployees()
    }, []);
  
      return (
    <div className='app-container'>
      <h2>Current Employees</h2>

      {employees.map((employee) => (
        <EmployeeRow employee={employee} key={employee._id} />
      ))}

      <Link to="/">Home</Link>
    </div>
  );
};
    
  
  export default EmployeesList;
  
  
  
  
  
  