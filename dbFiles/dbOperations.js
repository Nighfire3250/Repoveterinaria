/* eslint-disable no-unused-vars */
const config = require("./dbConfig"),
  sql = require("mssql");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = pool
      .request()
      .query(
        "SELECT idUsuario,nombre,nomUsuario,rol,estado FROM CAT_USUARIO WHERE idUsuario = 1"
      );
    console.log(employees);
    return employees;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getEmployees,
};
