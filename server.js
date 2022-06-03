/* eslint-disable no-unused-vars */
const express = require("express"),
  dbOperation = require("./dbFiles/dbOperations.js"),
  cors = require("cors");

//const API_PORT = process.env.PORT || 5000;
//const app = express();

//app.use(cors());

//app.get("/api", function (req, res) {
//  console.log("called");
//  res.send({ result: "hello" });
//});

//app.get("/quit", function (req, res) {
//  console.log("called quit");
//  res.send({ result: "quit" });
//});

dbOperation.getEmployees().then((res) => {
  console.log(res);
});

//app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
