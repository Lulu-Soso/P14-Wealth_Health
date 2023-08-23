import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateEmployeeMutation } from "../slices/employeesApiSlice";
// import Loader from "../components/Loader";

const Homepage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("");

  const [createEmployee, { isError }] = useCreateEmployeeMutation();

  const createEmployeeHandler = async () => {
    try {
      const response = await createEmployee({
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
      });

      if (response.data) {
        console.log("Employee created:", response.data);
      }
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };


  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employees-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
              id="date-of-birth"
              type="text"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="text"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <fieldset className="address">
            <legend>Address</legend>
            <div>
              <label htmlFor="street">Street</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <select
                name="state"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                {/* Ajoutez d'autres options d'état ici */}
              </select>
            </div>
            <div>
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="number"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </fieldset>
          <div>
            <label htmlFor="department">Department</label>
            <select
              name="department"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="">Select Department</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
              <option value="Engineering">Engineering</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Legal">Legal</option>
            </select>
          </div>
          {/* <button type="submit">Save</button> */}
          <button onClick={ createEmployeeHandler }>Save</button>
        </form>
        {isError && <div>Error creating employee</div>}
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  );
};

export default Homepage;
