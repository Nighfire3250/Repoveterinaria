/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const express = require("express"),
  employees = require("./dbFiles/Employee"),
  dbOperation = require("./dbFiles/dbOperations.js"),
  cors = require("cors");
const Employee = require("./dbFiles/Employee");

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

app.post("/apiCitas", async (req, res) => {
  console.log("called apiCitas");
  const result = await dbOperation.getCitas(req.body.name);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/pacientes", async (req, res) => {
  console.log("called");
  const result = await dbOperation.getPacienteDatos(req.body.name);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/apiEmployeeLogin", async (req, res) => {
  console.log("called buscar");
  const result = await dbOperation.getEmployeesLogin(req.body.nombre);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/logApi", async (req, res) => {
  console.log("called");
  const result = await dbOperation.loginEmployees(req.body.name);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/logIn", async (req, res) => {
  console.log("called login");
  const result = await dbOperation.login(req.body);
  res.send(result.recordset);
});

app.post("/logOut", async (req, res) => {
  console.log("called logout");
  const result = await dbOperation.logout(req.body.nombre);
  console.log(result.recordset);
  res.send(result.recordset);
});

app.post("/citaUpdate", async (req, res) => {
  console.log("called citaUpdate");
  const result = await dbOperation.citaUpdate(req.body.nombre);
});

app.post("/hello", async (req, res) => {
  console.log("called create");
  await dbOperation.createEmployee(req.body);
  const result = await dbOperation.getEmployees(req.body.nombre);
  res.send(result.recordset);
});


//let Pam = new Employee(
//  'Ernesto',
//  'Molina',
//  'Bello Amanecer',
//  'emolina13',
//  'emolina123',
//  'Administrador',
//  1
//);

//console.log(Pam);

//dbOperation.createEmployee(Pam);
//dbOperation.loginEmployees().then((res) => {
//  console.log(res);
//});

dbOperation.getEmployees().then((res) => {
  console.log(res);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
