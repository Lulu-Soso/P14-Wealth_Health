import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import employeesData from '../employees.js'
import EmployeeRow from '../components/EmployeeRow.jsx';
import { Link } from 'react-router-dom';

const EmployeesList = () => {
    const [sortedField, setSortedField] = useState(null);
    const [sortOrder, setSortOrder] = useState(1);
  
    const toggleSortOrder = (field) => {
      if (field === sortedField) {
        setSortOrder(sortOrder === 1 ? -1 : 1);
      } else {
        setSortedField(field);
        setSortOrder(1);
      }
    };
  
    const propertiesToShow = Object.keys(employeesData[0]).filter((key) => key !== '_id');
  
    const sortedData = sortedField
      ? [...employeesData].sort((a, b) =>
          a[sortedField] > b[sortedField] ? sortOrder : -sortOrder
        )
      : employeesData;
  
      return (
    <div className='app-container'>
      <h2>Current Employees</h2>
      <table className="no-border"> {/* Appliquer la classe CSS */}
        <thead>
          <tr>
            {propertiesToShow.map((key) => (
              <th
                key={key}
                onClick={() => toggleSortOrder(key)}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                {key}
                {sortedField === key && (
                  <div style={{ position: 'absolute', right: '5px', top: '0' }}>
                    <FontAwesomeIcon
                      icon={sortOrder === 1 ? faSortUp : faSortDown}
                    />
                    <FontAwesomeIcon
                      icon={sortOrder === 1 ? faSortDown : faSortUp}
                    />
                  </div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((employee, index) => (
            // <div className="no-border">
              <EmployeeRow key={employee._id} employee={employee} index={index} />
            // </div>
          ))}
        </tbody>
      </table>
      <Link to="/">Home</Link>
    </div>
  );
};
    
  
  export default EmployeesList;
  
  
  
  
  
  