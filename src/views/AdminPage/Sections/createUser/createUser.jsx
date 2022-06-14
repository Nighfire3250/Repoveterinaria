/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./createUser.scss";

export default function createUser () {
  const [message, setMessage] = useState('');
  const [returnedData, setReturnedData] = useState(["hello"]);
  const [employee, setEmployee] = useState({
    nombre: "",
    apellido:"",
    nomUsuario: "",
    rol: "",
    contrasena: "",
    direccion:"",
  });

  const setInput = (e) => {
    const {name,value} = e.target;
    console.log(value);
  }

  const fetchData = async () => {
    console.log(employee);
    const newData = await fetch("/api", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: employee.idUsuario,
        firstName: employee.nombre,
        usuario: employee.nomUsuario,
        rol: employee.rol,
        estado: employee.estado,
      }),
    }).then((res) => res.json());
    console.log(newData);
    // eslint-disable-next-line no-undef
    console.log(newData[0]);
    setReturnedData(newData[0]);
  };
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z]/gi, '');
    const {name,value} = event.target;
    console.log(value);
    setMessage(result);
  };

    return(
        <div className="newUser">
            <h1 className="newUserTitle">Nuevo Usuario</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Nombre Usuario</label>
                    <input type="text" name="usuario" placeholder="Usuario" value={message} onChange={handleChange}></input>
                </div>
                <div className="newUserItem">
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Apellido</label>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Contraseña</label>
                    <input type="text" name="contrasena" placeholder="Contraseña" onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Dirección</label>
                    <input type="text" name="direccion" placeholder="Dirección" onChange={setInput}></input>
                </div>
            </form>
            <div className="userRolBox">
                    <label>Rol</label>
                    <div className="userUpdateBox">
                        <label>Adminstrador</label>
                        <input 
                          type="checkbox"
                          value="Administrador"
                          className="userUpdateInputBox"
                        />
                    </div>
                    <div className="userUpdateBox">
                        <label>Veterinario</label>
                        <input
                          type="checkbox"
                          value="Veterinario"
                          className="userUpdateInputBox"
                    />
                    </div>
                    <div className="userUpdateBox">
                        <label>Cliente</label>
                        <input
                          type="checkbox"
                          value="Cliente"
                          className="userUpdateInputBox"
                        />
                    </div>
                </div>
            <div className="buttonUser">
                    <button className="newUserButton">Crear</button>
            </div>
        </div>
    );
}