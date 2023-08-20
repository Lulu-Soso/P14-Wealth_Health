import React from 'react';

const EmployeeItem = ({ employee }) => {
  return (
    <div className="employee-item">
      <div className="employee-title">First Name:</div>
      <div>{employee.firstName}</div>

      <div className="employee-title">Last Name:</div>
      <div>{employee.lastName}</div>

      <div className="employee-title">Birth Date:</div>
      <div>{employee.birthDate}</div>

      {/* Ajoutez les autres propriétés ici */}
    </div>
  );
};

export default EmployeeItem;

