import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import employees from "./data/employees.js"
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/employees", (req, res) => {
  res.json(employees)
})

app.get("/api/employees/:id", (req, res) => {
  const employee = employees.find((employee) => employee._id === req.params.id)
  res.json(employee)
})

app.listen(port, () => console.log(`Server running on port ${port}`));