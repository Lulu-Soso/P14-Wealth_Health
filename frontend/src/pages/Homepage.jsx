import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
    const saveEmployee = () => {
        // Implémentez la logique pour enregistrer l'employé ici
      };
    
      return (
        <>
          <div className="title">
            <h1>HRnet</h1>
          </div>
          <div className="container">
            <Link to="/employees-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <form action="#" id="create-employee">
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
              </div>
              <div>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" />
              </div>
              <div>
                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" />
              </div>
              <fieldset className="address">
                <legend>Address</legend>
                <div>
                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" />
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <select name="state" id="state"></select>
                </div>
                <div>
                  <label htmlFor="zip-code">Zip Code</label>
                  <input id="zip-code" type="number" />
                </div>
              </fieldset>
              <div>
                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
                </select>
              </div>
              <button onClick={saveEmployee}>Save</button>
            </form>
          </div>
          <div id="confirmation" className="modal">
            Employee Created!
          </div>
        </>
      );
    };


export default Homepage