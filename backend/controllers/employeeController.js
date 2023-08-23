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

// @desc   Create an employee
// @route   POST /api/employees
// @access   Public
const createEmployee = asyncHandler(async (req, res) => {
  // Utilisation de la déstructuration d'objet pour extraire les propriétés (données envoyées dans le corps (body) d'une requête HTTP).
  const {
    firstName,
    lastName,
    birthDate,
    startDate,
    street,
    city,
    state,
    zipCode,
    department,
  } = req.body;

  // Créez un nouvel objet Employee en utilisant les données du corps de la requête
  const newEmployee = new Employee({
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

  const createdEmployee = await newEmployee.save();

  if (createdEmployee) {
    res.status(201).json(createdEmployee);
  } else {
    res.status(400);
    throw new Error("Invalid employee data");
  }
});

export { getEmployees, getEmployeeById, createEmployee };
