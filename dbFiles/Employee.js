/* eslint-disable prettier/prettier */
class Employee {
  constructor(nombre, apellido, direccion, nomUsuario, contrasena, rol, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.usuario = nomUsuario;
    this.contrasena = contrasena;
    this.rol = rol;
    this.estado = estado;
  }
}

module.exports = Employee;
