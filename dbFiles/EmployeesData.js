class employee {
  constructor(idUsuario, nomUsuario, rol, estado) {
    this.id = idUsuario;
    this.rol = rol;
    this.nomUsuario = nomUsuario;
    this.estado = estado;
  }
}

module.exports = employee;
