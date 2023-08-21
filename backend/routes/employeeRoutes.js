import express from "express";
const router = express.Router();
// import employees from "../data/employees.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Employee from "../models/employeeModel.js";

// router.get("/api/employees", (req, res) => {
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const employees = await Employee.find({});
    res.json(employees);
  })
);

// router.get("/api/employees/:id", (req, res) => {
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const employee = employees.find((employee) => employee._id === req.params.id);
    const employee = await Employee.findById(req.params.id);

    if (employee) {
      return res.json(employee);
    } else {
        // res.status(404).json({ message: "Employee not found" });
        res.status(404);
        throw new Error("Resource not found");
    }
  })
);

export default router;
