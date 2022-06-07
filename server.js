/* eslint-disable no-unused-vars */
const express = require("express"),
  employees = require("./dbFiles/EmployeesData"),
  dbOperation = require("./dbFiles/dbOperations.js"),
  cors = require("cors");

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/api", async (req, res) => {
  console.log("called");
  const result = await dbOperation.getEmployees(req.body.name);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/quit", function (req, res) {
  console.log("called quit");
  res.send({ result: "quit" });
});

dbOperation.getEmployees().then((res) => {
 console.log(res);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
