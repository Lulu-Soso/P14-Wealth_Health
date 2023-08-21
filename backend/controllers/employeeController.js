import asyncHandler from "../middleware/asyncHandler.js";
import Employee from "../models/employeeModel.js";

// @desc   Fetch all employees
// @route   GET /api/employees
// @access   Public
const getEmployees = asyncHandler(async (req, res) => {
  const employees = await Employee.find({});
  res.json(employees);
});

// @desc   Fetch an employee
// @route   GET /api/employees/:id
// @access   Public
const getEmployeeById = asyncHandler(async (req, res) => {
  const employee = await Employee.findById(req.params.id);

  if (employee) {
    return res.json(employee);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getEmployees, getEmployeeById };
