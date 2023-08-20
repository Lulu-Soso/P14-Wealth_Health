import express from "express";
import employees from "./data/employees.js"
const port = 5000;

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