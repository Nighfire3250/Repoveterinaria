/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const { TRUE } = require("node-sass");
const config = require("./dbConfig"),
  sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        "SELECT idUsuario,nombre,apellido,nomUsuario,rol,estado FROM CAT_USUARIO WHERE idUsuario = 1"
      );
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const getEmployeesLogin = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `SELECT idUsuario,nombre,apellido,nomUsuario,contraseña,rol,estado FROM CAT_USUARIO WHERE nomUsuario = '${Employee.usuario}'`
      );
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const loginEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        "SELECT idUsuario,nombre,apellido,nomUsuario,rol,estado FROM CAT_USUARIO WHERE logEstate = 1"
      );
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const login = async (Employee) => {
  try {
    console.log(Employee.contrasena);
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `UPDATE CAT_USUARIO SET logEstate = 1 WHERE nomUsuario = '${Employee.usuario}' AND contraseña = '${Employee.contrasena}'`
      );
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const logout = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        `UPDATE CAT_USUARIO SET logEstate = 0 WHERE logEstate = 1`
      );
    return employees;
  } catch (error) {
    console.log(error);
  }
};

const createEmployee = async (Employee) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query(
      `INSERT INTO CAT_USUARIO VALUES ('${Employee.nombre}',
       '${Employee.apellido}',
       '${Employee.direccion}',
       '${Employee.usuario}',
       'Emolina12@',
       '${Employee.rol}',
       1)
      `
    );
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
  loginEmployees,
  createEmployee,
  login,
  logout,
  getEmployeesLogin,
};
