/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import validator from "validator";
import "./createUser.scss";

export default function createUser () {
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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

  const validate = (e) => {
    if (validator.isStrongPassword(e, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Is Strong Password')
    } else {
      setErrorMessage('Is Not Strong Password')
    }
    console.log(e);
  }

    return(
        <div className="newUser">
            <h1 className="newUserTitle">Nuevo Usuario</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Nombre Usuario</label>
                    <input type="text" name="usuario" placeholder="Usuario" value={message} onChange={setInput}></input>
                </div>
                <div className="newUserItem">
                    <label>Nombre</label>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange}></input>
                </div>
                <div className="newUserItem">
                    <label>Apellido</label>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={handleChange}></input>
                </div>
                <div className="newUserItem">
                    <label>Contraseña</label>
                    <input type="text" name="contrasena" placeholder="Contraseña" onChange={(e) => validate(e.target.value)}></input>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{errorMessage}</span>
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
                          onChange={setInput}
                        />
                    </div>
                    <div className="userUpdateBox">
                        <label>Veterinario</label>
                        <input
                          type="checkbox"
                          value="Veterinario"
                          className="userUpdateInputBox"
                          onChange={setInput}
                    />
                    </div>
                    <div className="userUpdateBox">
                        <label>Cliente</label>
                        <input
                          type="checkbox"
                          value="Cliente"
                          className="userUpdateInputBox"
                          onChange={setInput}
                        />
                    </div>
                </div>
            <div className="buttonUser">
                    <button className="newUserButton">Crear</button>
            </div>
        </div>
    );
}