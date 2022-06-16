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

const loginEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query(
        "SELECT nomUsuario,rol,estado FROM CAT_USUARIO WHERE nomUsuario = 'jmontiel14' and contraseña = 'admin14*'"
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
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
  loginEmployees,
  createEmployee,
};
