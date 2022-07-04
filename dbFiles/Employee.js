/* eslint-disable prettier/prettier */
class Employee {
  constructor(nombre, apellido, direccion, nomUsuario, contrasena, rol, estado, observaciones) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.usuario = nomUsuario;
    this.contrasena = contrasena;
    this.rol = rol;
    this.estado = estado;
    this.observaciones = observaciones;
  }
}

module.exports = Employee;
