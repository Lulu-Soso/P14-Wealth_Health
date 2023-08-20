import React from 'react';

const EmployeeRow = ({ employee, index }) => {
  const rowColor = index % 2 === 0 ? '#f2f2f2' : '#ffffff';

  return (
    <tr className="no-border" style={{ backgroundColor: rowColor }}>
      <td className="no-border">{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.birthDate}</td>
      <td>{employee.startDate}</td>
      <td>{employee.street}</td>
      <td>{employee.city}</td>
      <td>{employee.state}</td>
      <td>{employee.zipCode}</td>
      <td>{employee.department}</td>
    </tr>
  );
};

export default EmployeeRow;
